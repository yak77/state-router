import {router} from "../index";
import {AboutState} from "./aboutState";

export class HomeState {
	public gotoAbout() {
		router.gotoStates(new AboutState());
	}
}
