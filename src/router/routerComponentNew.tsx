import * as React from "react";

import {Router} from "./router";
import {State} from "./state";
import {isValidElement} from "react";
import {isReactElement} from "./switch";

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
	states: State[];
}

export class RouterComponentNew extends React.Component<IRouterComponentProps, IRouterComponentState> {

	constructor(props: Readonly<IRouterComponentProps>) {
		super(props);
		this.state = {
			states: this.props.router.getStates(),
		}
	}

	public componentDidMount(): void {
		// todo: better way to update instead of using forceUpdate?
		// this.props.router.registerForStateChange(() => this.forceUpdate());
		this.props.router.registerForStateChange(() => {
			this.setState({states: this.props.router.getStates()});
		});
	}

	public render(): React.ReactNode {
		const {children} = this.props;

		const states = this.props.router.getStates();
		const processedStates = 0;

		let matchedElement: React.ReactChild[] = [];
		React.Children.forEach(children, (element) => {
			if (isValidElement(element) && isReactElement(element)) {
				console.log("element.type: " + element.type);
				if (element.props.state && states && (states.length > processedStates) && (element.props.state === states[processedStates].constructor)) {
					matchedElement.push(element);
				}
			}
		});

		return (
			<RouterContext.Provider
				value={{
					states: this.props.router.getStates(),
					processedStates: 0,
				}}
			>
				{matchedElement}
			</RouterContext.Provider>
		);
	}
}
