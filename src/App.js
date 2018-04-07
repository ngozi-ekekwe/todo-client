import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Todos from './containers/Todos';

class App extends Component {

  checkIfLoggedIn(nextState, replace) {
    console.log('got called')
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
       replace({ pathname: '/login' });
    }
   }
   
   logUserOut(nextState, replace, done) {
     const token = JSON.parse(localStorage.getItem('token'));
     if (token) {
       replace({ pathname: '/login' });
     }
     localStorage.removeItem("currentUser");
     window.location = '/';
   }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} onEnter={this.checkIfLoggedIn} />
          <Route path="/login"  component={Login} />
          <Route path="/signup"  component={Signup} />
          <Route path="/todos"  component={Todos} />

        </Switch>
      </div>
    );
  }
}

export default App;
