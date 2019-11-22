export interface IStateArgs {
}

export class State<TArgs extends IStateArgs> {
	constructor(protected args: TArgs) {
	}
}

// export type StateClass<TState extends State> = new() => TState;
export interface StateClass2<TArgs extends IStateArgs> {
	new(args: TArgs): State<TArgs>;
}

export interface StateClass<TState, TArgs> {
	new(args: TArgs): TState;
}

// export type StateType<TState> = TState extends State<infer TArgs> ? State<TArgs> : never;
