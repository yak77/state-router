import {IStateArgs, State} from "../router/state";
import {LoggingState} from "./loggingState";

export class RootState extends LoggingState<IStateArgs> {
	constructor(args: IStateArgs = {}) {
		super("RootState", args);
	}
}
