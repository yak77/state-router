import {router} from "../index";
import {AboutState} from "./aboutState";
import {PublicState} from "./publicState";
import {State} from "../router/state";

export class HomeState extends State {
	public gotoAbout() {
		router.gotoStates(new AboutState());
	}

	public gotoPublic() {
		router.gotoStates(new PublicState());
	}
}
