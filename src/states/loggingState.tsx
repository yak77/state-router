import {State} from "../router/state";
import {IRedirect} from "../router/redirect";

export class LoggingState<TArgs> extends State<TArgs> {
	constructor(protected _name: string, args: TArgs) {
		super(args);
	}

	public log(msg: string) {
		console.log(this._name + ": " + msg);
	}

	public async willEnter(): Promise<boolean | IRedirect> {
		console.log(this._name + ".willEnter");
		return super.willEnter();
	}

	public async willExit(): Promise<boolean> {
		console.log(this._name + ".willExit");
		return super.willExit();
	}

	public async didExit(): Promise<void> {
		console.log(this._name + ".didExit");
		super.didExit();
	}

	public async didRetain(): Promise<void> {
		console.log(this._name + ".didRetain");
		super.didRetain();
	}

	public async didEnter(): Promise<void> {
		console.log(this._name + ".didEnter");
		super.didEnter();
	}
}
