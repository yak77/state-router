import {router} from "../index";
import {IStateArgs, State} from "../router/state";
import {HomeState} from "./homeState";
import {LoggingState} from "./loggingState";
import {userStore} from "../stores/userStore";
import {autobind} from "core-decorators";

export interface Args extends IStateArgs {
	from?: State<any>[];
}

@autobind
export class LoginState extends LoggingState<Args> {
	constructor(args: Args = {}) {
		super("LoginState", args);
	}

	public login() {
		userStore.login();
		if (this.args.from) {
			router.gotoStates(...this.args.from);
		} else {
			router.gotoStates(new HomeState());
		}
	}

	public logout() {
		userStore.logout();
		router.gotoStates(new HomeState());
	}

	public gotoHome() {
		router.gotoStates(new HomeState({}));
	}
}
