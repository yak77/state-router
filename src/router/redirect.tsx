import {State} from "./state";

export interface IRedirect {
	states: State<any>[];
}

export function redirect(...states: State<any>[]): IRedirect {
	return {
		states
	};
}
