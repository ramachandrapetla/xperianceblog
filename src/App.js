import React from 'react';
import './assets/styles/base.scss';
import Navigation from './components/Navigation'
import PageRenderer from './page-renderer'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const user = {
    firstName : "Ram",
    lastName : "Petla"
  }
  return (
    <Router>
      <Navigation user = {user}/>
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render= {() => <Redirect to="/home" />} />
        <Route component = {() => 404} />
      </Switch>
    </Router>

  );
}

export default App;
