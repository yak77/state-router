import {router} from "../index";
import {AboutState} from "./aboutState";
import {PublicState} from "./publicState";
import {IStateArgs, State} from "../router/state";
import {MoreInfoState} from "./moreInfoState";

export interface Args extends IStateArgs {
}

export class HomeState extends State<Args> {
	public gotoAbout() {
		router.gotoStates(new AboutState({}));
	}

	public gotoPublic() {
		router.gotoStates(new PublicState({}));
	}

	public test() {
		// router.gotoStateClasses(PublicState, MoreInfoState, MoreInfoState, MoreInfoState);
	}
}
