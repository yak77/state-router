import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Router} from "./router/router";
import {HomeState} from "./states/homeState";

export const router = new Router();
router.gotoStates(new HomeState({}));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// function test<TState>(props: RouteComponentProps<TState>) {
//
// }
//
// const p = {
// 	state: HomeState
// };
//
// test(p);
