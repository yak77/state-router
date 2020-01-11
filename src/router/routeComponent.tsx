import React from "react";

// export type RouteComponentProps<TState> = TState extends State<infer TArgs>
// 	? {
// 		state: TState;
// 	}
// 	: never;

export interface IRouteComponentProps<TState> {
	state: TState;
}

export class RouteComponent<TState, TReactState = {}>
	extends React.Component<IRouteComponentProps<TState>, TReactState> {
}
