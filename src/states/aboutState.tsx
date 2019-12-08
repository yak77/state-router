import {IStateArgs, State} from "../router/state";
import {router} from "../index";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";

export interface Args extends IStateArgs {
}

export class AboutState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("AboutState", args);
	}

	async onEnter(): Promise<boolean> {
		super.onEnter();
		return false;
	}

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}
}
