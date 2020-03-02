import {IRedirect} from "./redirect";

export interface IStateArgs {
}

export class State<TArgs extends IStateArgs> {
	constructor(protected args: TArgs) {
	}

	public async willEnter(): Promise<boolean | IRedirect> {
		return true;
	}

	public async didEnter(): Promise<void> {
	}

	public async didRetain(): Promise<void> {
	}

	public async willExit(): Promise<boolean> {
		return true;
	}

	public async didExit(): Promise<void> {
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
