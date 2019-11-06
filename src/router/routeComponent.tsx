import React from "react";
import {State} from "./state";

export interface IRouteComponentProps<TState extends State> {
	state: TState;
}

export class RouteComponent<TState extends State, TReactState = {}>
	extends React.Component<IRouteComponentProps<TState>, TReactState> {
}
