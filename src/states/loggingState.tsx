import {State} from "../router/state";

export class LoggingState<TArgs> extends State<TArgs> {
	constructor(protected _name: string, args: TArgs) {
		super(args);
	}

	public log(msg: string) {
		console.log(this._name + ": " + msg);
	}

	public async canExit(): Promise<boolean> {
		console.log(this._name + ".canExit");
		return super.canExit();
	}

	public async onExit(): Promise<boolean> {
		console.log(this._name + ".onExit");
		return super.onExit();
	}

	public async onRetain(): Promise<boolean> {
		console.log(this._name + ".onRetain");
		return super.onRetain();
	}

	public async onEnter(): Promise<boolean> {
		console.log(this._name + ".onEnter");
		return super.onEnter();
	}
}
