import {router} from "../index";
import {State} from "../router/state";

export class MoreInfoState extends State {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState());
	}
}
