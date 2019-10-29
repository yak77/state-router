import {State} from "./state";

export class Router {
	private _states: State[] = [];

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

	public gotoStates(...states: State[]) {
		this._states = states;
		this.statesChanged();
	}

	public pushStates(...states: State[]) {
		this._states.push(...states);
		this.statesChanged();
	}
}
