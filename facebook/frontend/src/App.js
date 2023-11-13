import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Switch>
      <Route path="/users/:userId">
        <UserProfile />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/">
        <Navigation />
      </Route>
    </Switch>
  );
}

export default App;