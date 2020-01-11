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
import {PublicState} from "./states/publicState";
import {Public} from "./components/public";
import {PrivateState} from "./states/privateState";
import {Private} from "./components/private";
import {LoginState} from "./states/loginState";
import {Login} from "./components/login";
import {userStore} from "./stores/userStore";
import {MemoryTestState} from "./states/memoryTestState";
import {MemoryTestPage} from "./components/memoryTestPage";
import {MemoryPage, MemoryPageWrapper} from "./memoryPage";

interface IProps {
}

interface IState {
  isShowMemoryPage: boolean;
}

class App extends Component<IProps, IState> {
  private _renders = 0;

  constructor(props: IProps) {
    super(props);
    this.state = {isShowMemoryPage: false};
  }

  render() {
    return (
      <RouterComponent router={router}>
        App: {++this._renders}
        <br/>
        <button onClick={() => this.forceUpdate()}>
          Refresh
        </button>
        <button onClick={() => this.setState({isShowMemoryPage: !this.state.isShowMemoryPage})}>
          Memory Page
        </button>
        <br/>
        Logged In User: {userStore.user()}
        <br/>
        -------------------------
        <br/>
        {this.state.isShowMemoryPage
          ? (
            <MemoryPageWrapper/>
          )
          : (
            <Switch>
              <Route stateClass={HomeState} component={Home}/>
              <Route stateClass={AboutState} component={About}/>
              <Route stateClass={PublicState} component={Public}/>
              <Route stateClass={PrivateState} component={Private}/>
              <Route stateClass={LoginState} component={Login}/>
              <Route stateClass={MemoryTestState} component={MemoryTestPage}/>
            </Switch>
          )
        }
      </RouterComponent>
    );
  }
}

export default App;
