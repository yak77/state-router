import {router} from "../index";
import {MoreInfoState} from "./moreInfoState";
import {State} from "../router/state";

export class PublicState extends State {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState(), new MoreInfoState());
	}
}
