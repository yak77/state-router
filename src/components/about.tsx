import {RouteContext} from "../router/route";
import React from "react";

export class About extends React.Component<{}, {}> {
	static contextType = RouteContext;

	private _renders = 0;

	render() {
		return (
			<div>
				About: {++this._renders}
			</div>
		);
	}
}