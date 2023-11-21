import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import NewsFeed from './components/NewsFeed';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


function App() {
  // const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // if (!sessionUser) history.push('/login');

  

  return (
    <Switch>
      <Route path="/users/:userId">
        <Navigation />
        <UserProfile />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/">
        <Navigation />
        <NewsFeed />
      </Route>
    </Switch>
  )
}

export default App;