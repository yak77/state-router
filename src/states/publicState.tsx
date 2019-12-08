import {router} from "../index";
import {MoreInfoState} from "./moreInfoState";
import {IStateArgs, State} from "../router/state";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";

export interface Args extends IStateArgs {
}

export class PublicState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("PublicState", args);
	}

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}

	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState({x: 1}), new MoreInfoState({x: 2}));
	}
}
