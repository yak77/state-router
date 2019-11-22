import {router} from "../index";
import {MoreInfoState} from "./moreInfoState";
import {IStateArgs, State} from "../router/state";

export interface Args extends IStateArgs {
}

export class PublicState extends State<Args> {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState({x: 1}), new MoreInfoState({x: 2}));
	}
}
