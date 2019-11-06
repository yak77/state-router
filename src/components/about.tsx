import React from "react";

import {AboutState} from "../states/aboutState";
import {RouteComponent} from "../router/routeComponent";

export class About extends RouteComponent<AboutState> {
	private _renders = 0;

	render() {
		return (
			<div>
				About: {++this._renders}
			</div>
		);
	}
}