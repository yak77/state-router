import React from "react";

import {Route} from "../router/route";
import {Switch} from "../router/switch";
import {PublicState} from "../states/publicState";
import {MoreInfoState} from "../states/moreInfoState";
import {MoreInfo} from "./moreInfo";
import {RouteComponent} from "../router/routeComponent";

export class Public extends RouteComponent<PublicState> {
	private _renders = 0;

	render() {
		const {state} = this.props;
		return (
			<div>
				Public: {++this._renders}
				<br/>
				<button onClick={() => state.gotoMoreInfo()}>
					More Info
				</button>

				<Switch>
					<Route stateClass={MoreInfoState} component={MoreInfo}/>
				</Switch>
			</div>
		);
	}
}
