import React from "react";

import {RouteComponent} from "../router/routeComponent";
import {PrivateState} from "../states/privateState";

export class Private extends RouteComponent<PrivateState> {
	private _renders = 0;

	render() {
		return (
			<div>
				Private: {++this._renders}
				<br/>
				<button onClick={this.props.state.gotoHome}>Home</button>
			</div>
		);
	}
}