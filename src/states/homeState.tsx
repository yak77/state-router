import {router} from "../index";
import {AboutState} from "./aboutState";
import {PublicState} from "./publicState";
import {IStateArgs, State} from "../router/state";
import {MoreInfoState} from "./moreInfoState";
import {LoggingState} from "./loggingState";
import {PrivateState} from "./privateState";
import {Login} from "../components/login";
import {LoginState} from "./loginState";

export interface Args extends IStateArgs {
}

export class HomeState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("HomeState", args);
	}

	public async gotoLogin() {
		const result = await router.gotoStates(new LoginState());
		console.log("gotoLogin result: " + result);
	}

	public async gotoAbout() {
		const result = await router.gotoStates(new AboutState({}));
		console.log("gotoAbout result: " + result);
	}

	public async gotoPublic() {
		const result = await router.gotoStates(new PublicState({}));
		console.log("gotoPublic result: " + result);
	}

	public async gotoPrivate() {
		const result = await router.gotoStates(new PrivateState());
		console.log("gotoPrivate result: " + result);
		// router.gotoStateClasses(PublicState, MoreInfoState, MoreInfoState, MoreInfoState);
	}
}
