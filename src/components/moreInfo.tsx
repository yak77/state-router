import React from "react";

import {Route} from "../router/route";
import {Switch} from "../router/switch";
import {MoreInfoState} from "../states/moreInfoState";
import {RouteComponent} from "../router/routeComponent";

export class MoreInfo extends RouteComponent<MoreInfoState> {
	private _renders = 0;

	render() {
		const {state} = this.props;

		return (
			<div>
				More Info: {++this._renders}
				<br/>
				<button onClick={() => state.gotoMoreInfo()}>
					More Info
				</button>
				<br/>
				<Switch>
					<Route stateClass={MoreInfoState} component={MoreInfo}/>
				</Switch>
			</div>
		);
	}
}
