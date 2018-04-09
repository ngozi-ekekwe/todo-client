import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Todos from './containers/Todos';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/login"  component={Login} />
          <Route path="/signup"  component={Signup} />
          <Route path="/todos"  component={Todos} />

        </Switch>
      </div>
    );
  }
}

export default App;
