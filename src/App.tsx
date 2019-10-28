import React, {Component} from 'react';
import './App.css';

import {RouterComponent} from "./router/routerComponent";
import {router} from "./index";
import {Route} from "./router/route";
import {Home} from "./components/home";
import {HomeState} from "./states/homeState";
import {Switch} from "./router/switch";
import {AboutState} from "./states/aboutState";
import {About} from "./components/about";

class App extends Component {
  render() {
    return (
      <RouterComponent router={router}>
        <button onClick={() => this.forceUpdate()}>
          Refresh
        </button>
        <br/>
        <Switch>
          <Route state={HomeState}>
            <Home/>
          </Route>
          <Route state={AboutState}>
            <About/>
          </Route>
        </Switch>
      </RouterComponent>
    );
  }
}

export default App;
