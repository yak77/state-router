import * as React from "react";

import {Router} from "./router";
import {State} from "./state";

export interface IRouterContext {
	states: State[];
	processedStates: number;
}

export const RouterContext = React.createContext<IRouterContext>({
	states: [],
	processedStates: 0,
});

export interface IRouterComponentProps {
	router: Router;
}

export interface IRouterComponentState {
	// states: State[];
}

export class RouterComponent extends React.Component<IRouterComponentProps, IRouterComponentState> {
	public componentDidMount(): void {
		// todo: better way to update instead of using forceUpdate?
		// this.props.router.registerForRouteChange(() => this.forceUpdate());
	}

	public render(): React.ReactNode {
		const {children} = this.props;

		return (
			<RouterContext.Provider
				value={{
					states: this.props.router.getStates(),
					processedStates: 0,
				}}
			>
				{children}
			</RouterContext.Provider>
		);
	}
}
