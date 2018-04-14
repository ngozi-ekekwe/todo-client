import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Todos from './containers/Todos';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/login"  component={Login} />
          <Route path="/signup"  component={Signup} />
          <Route path="/todos"  component={Todos}  />
          <Route path="/logout"  />
        </Switch>
      </div>
    );
  }
}

export default App;
