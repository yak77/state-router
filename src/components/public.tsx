import {Route, RouteContext} from "../router/route";
import React from "react";
import {Switch} from "../router/switch";
import {RouteComponent} from "../router/RouteComponent";
import {PublicState} from "../states/publicState";
import {MoreInfoState} from "../states/moreInfoState";
import {MoreInfo} from "./moreInfo";

export class Public extends React.Component<{}, {}> {
	static contextType = RouteContext;

	private _renders = 0;

	render() {
		return (
			<div>
				Public: {++this._renders}
				<br/>
				<button onClick={() => this.context.state.gotoMoreInfo()}>
					More Info
				</button>

				<Switch>
					<Route state={MoreInfoState}>
						<MoreInfo/>
					</Route>
				</Switch>
			</div>
		);
	}
}