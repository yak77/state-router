import {State} from "./state";

export interface IRouterEvents {
	stateChangeStart?: () => void;
	stateChangeDone?: (result: boolean) => void;
	statesChanged?: () => void;
}

export class Router {
	private _states: State<any>[] = [];

	private _callbacks: IRouterEvents[] = [];

	public registerForEvents(routerEventHandler: IRouterEvents) {
		this._callbacks.push(routerEventHandler);
	}

	protected stateChangeStart() {
		this._callbacks.forEach(handler => handler.stateChangeStart && handler.stateChangeStart());
	}

	protected stateChangeDone(result: boolean) {
		this._callbacks.forEach(handler => handler.stateChangeDone && handler.stateChangeDone(result));
	}

	public getStates() {
		return this._states;
	}

	protected setStates(states: State<any>[]) {
		this._states = states;
		this._callbacks.forEach(handler => handler.statesChanged && handler.statesChanged());
	}

	// public gotoStateClasses(...stateClasses: StateClass<any>[]) {
	// 	const states = stateClasses.map((stateClass) => new stateClass());
	// 	this.gotoStates(...states);
	// }

	public async gotoStates(...states: State<any>[]): Promise<boolean> {
		this.stateChangeStart();
		const result = await this.internalGotoStates(states);
		this.stateChangeDone(result);

		return result;
	}

	protected async internalGotoStates(states: State<any>[]): Promise<boolean> {
		const numMatchedStates = this.getNumMatchedStates(states);

		for (let i = this._states.length - 1; i >= numMatchedStates; --i) {
			if (!await this._states[i].willExit()) {
				return false;
			}
		}

		const newStates = states.slice(numMatchedStates);
		for (let i = 0; i < newStates.length; ++i) {
			const result = await newStates[i].willEnter();
			if (typeof result === "boolean") {
				if (!result) {
					return false;
				}
			} else {
				// we have a redirect
				return await this.gotoStates(...result.states);
			}
		}

		for (let i = this._states.length - 1; i >= numMatchedStates; --i) {
			await this._states[i].didExit();
		}

		const preservedStates = this._states.slice(0, numMatchedStates);
		for (let i = 0; i < preservedStates.length; ++i) {
			await preservedStates[i].didRetain();
		}

		for (let i = 0; i < newStates.length; ++i) {
			await newStates[i].didEnter();
		}

		this.setStates([...preservedStates, ...newStates]);

		return true;
	}

	public async pushStates(...states: State<any>[]) {
		return this.gotoStates(...this._states, ...states);
	}

	protected getNumMatchedStates(newStates: State<any>[]) {
		let matchedStates = 0;

		for (let i = 0; i < newStates.length; ++i) {
			if (i < this._states.length && newStates[i] === this._states[i]) {
				++matchedStates;
			} else {
				break;
			}
		}

		return matchedStates;
	}
}
