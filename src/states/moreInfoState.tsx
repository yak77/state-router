import {router} from "../index";

export class MoreInfoState {
	public gotoMoreInfo() {
		router.pushStates(new MoreInfoState());
	}
}
