import {router} from "../index";
import {IStateArgs, State} from "../router/state";

export interface Args extends IStateArgs {
}

export class MoreInfoState extends State<Args> {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState({}));
	}
}
