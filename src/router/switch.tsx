import * as React from "react";

// import {Redirect} from "./redirectComponent";
import {IRouteProps, Route} from "./route";
import {RouterContext} from "./routerComponent";

export interface ISwitchProps {
}

export function isReactElement(element: React.ReactChild): element is React.ReactElement<any> {
	return element && (element as any).type;
}

export class Switch extends React.Component<ISwitchProps, {}> {
	public render() {
		const {children} = this.props;

		return (
			<RouterContext.Consumer>
				{(routerContext) => {
					let matchedElement: React.ReactChild | null = null;
					if (routerContext.processedStates < routerContext.states.length) {
						React.Children.forEach(children, (element) => {
							if (!matchedElement && React.isValidElement(element) && isReactElement(element)) {
								// if (element.type === Redirect) {
								// 	matchedElement = element;
								// } else if (element.type === Route) {
								if (element.type === Route) {
									const elementProps = element.props as IRouteProps;
									if (routerContext.states[routerContext.processedStates].constructor === elementProps.state) {
										matchedElement = element;
									}
								}
							}
						});
					}
					return matchedElement;
				}}
			</RouterContext.Consumer>
		);
	}
}
