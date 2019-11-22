import {router} from "../index";
import {IStateArgs, State} from "../router/state";

export interface Args extends IStateArgs {
	x: number;
}

export class MoreInfoState extends State<Args> {
	public getValue() {
		return this.args.x;
	}

	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState({x: 3}));
	}
}
