import React from "react";

import {HomeState} from "../states/homeState";
import {RouteComponent} from "../router/routeComponent";

export class Home extends RouteComponent<HomeState> {
	private _renders = 0;

	render() {
		const {state} = this.props;

		return (
			<div>
				Home: {++this._renders}
				<br/>
				<button onClick={() => state.gotoMemoryTest()}>
					Memory Test
				</button>
				<br/>
				<button onClick={() => state.gotoLogin()}>
					Login
				</button>
				<br/>
				<button onClick={() => state.gotoAbout()}>
					About
				</button>
				<br/>
				<button onClick={() => state.gotoPublic()}>
					Public
				</button>
				<br/>
				<button onClick={() => state.gotoPrivate()}>
					Private
				</button>
			</div>
		);
	}
}
