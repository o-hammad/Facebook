import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';

function App() {
  return (
    <Switch>
      <Route path="/">
        <LoginForm />
      </Route>
    </Switch>
  );
}

export default App;