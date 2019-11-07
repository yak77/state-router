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

	public gotoUrl(url: string) {

	}

	// public gotoStateClasses(...stateClasses: StateClass<any>[]) {
	// 	const states = stateClasses.map((stateClass) => new stateClass());
	// 	this.gotoStates(...states);
	// }

	public gotoStates(...states: State<any>[]) {
		this._states = states;
		this.statesChanged();
	}

	public pushStates(...states: State<any>[]) {
		this._states.push(...states);
		this.statesChanged();
	}
}
