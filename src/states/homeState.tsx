import {router} from "../index";
import {AboutState} from "./aboutState";
import {PublicState} from "./publicState";

export class HomeState {
	public gotoAbout() {
		router.gotoStates(new AboutState());
	}

	public gotoPublic() {
		router.gotoStates(new PublicState());
	}
}
