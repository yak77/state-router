import {Route, RouteContext} from "../router/route";
import React from "react";
import {Switch} from "../router/switch";
import {MoreInfoState} from "../states/moreInfoState";

export class MoreInfo extends React.Component<{}, {}> {
	static contextType = RouteContext;

	private _renders = 0;

	render() {
		return (
			<div>
				More Info: {++this._renders}
				<br/>
				<button onClick={() => this.context.state.gotoMoreInfo()}>
					More Info
				</button>
				<br/>
				<Switch>
					<Route state={MoreInfoState}>
						<MoreInfo/>
					</Route>
				</Switch>
			</div>
		);
	}
}
