import {router} from "../index";
import {IStateArgs} from "../router/state";
import {LoggingState} from "./loggingState";

export interface Args extends IStateArgs {
	x: number;
}

export class MoreInfoState extends LoggingState<Args> {
	constructor(args: Args) {
		super("MoreInfoState", args);
	}

	public getValue() {
		return this.args.x;
	}

	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState({x: 3}));
	}
}
