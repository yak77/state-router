import {router} from "../index";
import {MoreInfoState} from "./moreInfoState";

export class PublicState {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState());
	}
}
