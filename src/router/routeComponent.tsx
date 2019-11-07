import React from "react";
import {IStateArgs, State} from "./state";

export type RouteComponentProps<TState> = TState extends State<infer TArgs>
	? {
		state: TState;
	}
	: never;

export interface IRouteComponentProps<TState extends State<TArgs>, TArgs extends IStateArgs = IStateArgs> {
	state: TState;
}

export class RouteComponent<TState extends State<TArgs>, TArgs extends IStateArgs = IStateArgs, TReactState = {}>
	extends React.Component<IRouteComponentProps<TState, TArgs>, TReactState> {
}
