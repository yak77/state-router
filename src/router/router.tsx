import {State, StateClass} from "./state";

export class Router {
	private _states: State<any>[] = [];

	private _callbacks: (() => void)[] = [];

	public registerForStateChange(callback: () => void) {
		this._callbacks.push(callback);
	}

	protected statesChanged() {
		this._callbacks.forEach(callback => callback());
	}

	public getStates() {
		return this._states;
	}

	// public gotoStateClasses(...stateClasses: StateClass<any>[]) {
	// 	const states = stateClasses.map((stateClass) => new stateClass());
	// 	this.gotoStates(...states);
	// }

	public async gotoStates(...states: State<any>[]): Promise<boolean> {
		const numMatchedStates = this.getNumMatchedStates(states);

		for (let i = this._states.length - 1; i >= numMatchedStates; --i) {
			if (!await this._states[i].canExit()) {
				return false;
			}
		}

		const newStates = states.slice(numMatchedStates);
		for (let i = 0; i < newStates.length; ++i) {
			const result = await newStates[i].canEnter();
			if (typeof result === "boolean") {
				if (!result) {
					return false;
				}
			} else {
				// we have a redirect
				return this.gotoStates(...result.states);
			}
			if (!await newStates[i].canEnter()) {
				return false;
			}
		}

		for (let i = this._states.length - 1; i >= numMatchedStates; --i) {
			if (!await this._states[i].onExit()) {
				return false;
			}
		}

		const preservedStates = this._states.slice(0, numMatchedStates);
		for (let i = 0; i < preservedStates.length; ++i) {
			if (!await preservedStates[i].onRetain()) {
				return false;
			}
		}

		for (let i = 0; i < newStates.length; ++i) {
			if (!await newStates[i].onEnter()) {
				return false;
			}
		}

		this._states = [...preservedStates, ...newStates];
		this.statesChanged();

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
