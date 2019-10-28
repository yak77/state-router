import React from "react";
import {RouteContext} from "../router/route";

export class Home extends React.Component<{}, {}> {
	static contextType = RouteContext;

	private _renders = 0;

	render() {
		return (
			<div>
				Home: {++this._renders}
				<br/>
				<button onClick={() => this.context.state.gotoAbout()}>
					About
				</button>
				<br/>
				<button>
					Private
				</button>
			</div>
		);
	}
}
