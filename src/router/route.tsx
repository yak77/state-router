import * as React from "react";

import {RouterContext} from "./routerComponent";
import {State} from "./state";

export interface IRouteContext<T extends State> {
	state: T | null;
}

export const RouteContext = React.createContext<IRouteContext<any>>({
	state: null,
});


export interface IRouteProps {
	/**
	 * The State to try to match to the current state we are processing
	 */
	state: State;
	/**
	 * If exact is set to true, then this Route will only match if state is the last state to be
	 * processed in the router's array of current states.  In other words if exact is true and there are
	 * additional states that need to be processed, then this Route will not be considered a match
	 */
	exact?: boolean;
}

export class Route extends React.Component<IRouteProps, {}> {
	public render() {
		const {children, state, exact} = this.props;

		return (
			<RouterContext.Consumer>
				{(routerContext) => {
					if ((routerContext.processedStates < routerContext.states.length) &&
						(routerContext.states[routerContext.processedStates].constructor === state)) {
						// const state = routerContext.states[routerContext.processedStates];
						if (!exact) {
							// Inject the url into the props of the component.  Some libraries such as redux or mobx
							// implement shouldComponentUpdate and could potentially block updates in the case where the url
							// has changed but the current state has not (they will not detect a prop change in this case).
							// However, the current component might need to modify its render implementation based off of the url
							// change. So, we will inject the url as a prop, thereby allowing mobx and redux to detect the prop
							// change and consequently allowing the component's render method to be properly called.
							// tslint:disable-next-line:variable-name
							// ***** const ___injectedUrl = state.routeInfo.location.pathname;
							return (
								<RouterContext.Provider
									value={{
										states: routerContext.states,
										processedStates: routerContext.processedStates + 1,
									}}
								>
									<RouteContext.Provider
										value={{state: routerContext.states[routerContext.processedStates]}}
									>
										{children}
									</RouteContext.Provider>
								</RouterContext.Provider>
							);
						}
					}
					return null;
				}}
			</RouterContext.Consumer>
		);
	}
}
