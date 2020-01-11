import React from "react";

import {RouteComponent} from "../router/routeComponent";
import {LoginState} from "../states/loginState";

export class Login extends RouteComponent<LoginState> {
	private _renders = 0;

	render() {
		return (
			<div>
				Login: {++this._renders}
				<br/>
				<button onClick={this.props.state.gotoHome}>Home</button>
				<br/>
				<button onClick={this.props.state.login}>Login</button>
				<br/>
				<button onClick={this.props.state.logout}>Logout</button>
			</div>
		);
	}
}
