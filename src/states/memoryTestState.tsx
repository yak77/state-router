import {router} from "../index";
import {IStateArgs} from "../router/state";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";

export interface Args extends IStateArgs {
}

export class MemoryTestState extends LoggingState<Args> {
	private _data: number[] = [];

	constructor(args: Args = {}) {
		super("MemoryTestState", args);

		this._data.length = 2000000;
	}

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}
}
