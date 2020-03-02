import {router} from "../index";
import {IStateArgs} from "../router/state";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";
import {userStore} from "../stores/userStore";
import {IRedirect, redirect} from "../router/redirect";
import {LoginState} from "./loginState";

export interface Args extends IStateArgs {
}

export class PrivateState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("PrivateState", args);
	}

	public async willEnter(): Promise<boolean | IRedirect> {
		if (!userStore.isUserLoggedIn()) {
			return redirect(new LoginState({from: [this]}));
		}

		return super.willEnter();
	}

	// public async onEnter(): Promise<boolean> {
	// 	this.log("onEnter");
	//
	// 	return userStore.isUserLoggedIn();
	// }

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}
}
