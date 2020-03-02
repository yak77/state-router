import {IStateArgs} from "../router/state";
import {router} from "../index";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";
import {IRedirect} from "../router/redirect";

export interface Args extends IStateArgs {
}

export class AboutState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("AboutState", args);
	}

	async willEnter(): Promise<boolean | IRedirect> {
		const result = super.willEnter();
		return result; // false;
		// return false;
	}

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}
}
