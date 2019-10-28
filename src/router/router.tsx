import {State} from "./state";

export class Router {
	private _states: State[] = [];

	public getStates() {
		return this._states;
	}

	public gotoStates(...states: State[]) {
		this._states = states;
	}

	public pushStates(...states: State[]) {
		this._states.push(states);
	}
}
