export interface IStateArgs {
}

export class State<TArgs extends IStateArgs> {
	constructor(args: TArgs) {
	}
}

// export type StateClass<TState extends State> = new() => TState;
export interface StateClass<TArgs extends IStateArgs> {
	new(args: TArgs): State<TArgs>;
}

// export type StateType<TState> = TState extends State<infer TArgs> ? State<TArgs> : never;
