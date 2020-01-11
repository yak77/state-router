import React from "react";

import {IRouteComponentProps, RouteComponent} from "../router/routeComponent";
import {MemoryTestState} from "../states/memoryTestState";

export class MemoryTestPage extends RouteComponent<MemoryTestState> {
	private _renders = 0;

	private _data: number[] = [];

	constructor(props: IRouteComponentProps<MemoryTestState>, context?: any) {
		super(props, context);

		this._data.length = 1000000;
	}

	render() {
		const {state} = this.props;
		return (
			<div>
				MemoryTest: {++this._renders}
				<br/>
				<button onClick={() => state.gotoHome()}>Home</button>
				<br/>
				<br/>
				<br/>
			</div>
		);
	}
}
