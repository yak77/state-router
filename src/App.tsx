import React from 'react';
import './App.css';

import {RouterComponent} from "./router/routerComponent";
import {router} from "./index";
import {Route} from "./router/route";
import {Home} from "./components/home";
import {HomeState} from "./states/homeState";
import {Switch} from "./router/switch";

const App: React.FC = () => {
  return (
    <RouterComponent router={router}>
      <Switch>
        <Route state={HomeState}>
          <Home/>
        </Route>
        <Route state={HomeState}>
          <Home/>
        </Route>
      </Switch>
    </RouterComponent>
  );
};

export default App;
