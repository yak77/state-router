import {IRedirect} from "./redirect";

export interface IStateArgs {
}

export class State<TArgs extends IStateArgs> {
	constructor(protected args: TArgs) {
	}

	public async canEnter(): Promise<boolean | IRedirect> {
		return true;
	}

	public async onEnter(): Promise<boolean> {
		return true;
	}

	public async onRetain(): Promise<boolean> {
		return true;
	}

	public async canExit(): Promise<boolean> {
		return true;
	}

	public async onExit(): Promise<boolean> {
		return true;
	}
}

// export type StateClass<TState extends State> = new() => TState;
// export interface StateClass2<TArgs extends IStateArgs> {
// 	new(args: TArgs): State<TArgs>;
// }

export interface StateClass<TState, TArgs> {
	new(args: TArgs): TState;
}

// export type StateType<TState> = TState extends State<infer TArgs> ? State<TArgs> : never;
