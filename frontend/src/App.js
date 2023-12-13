import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import NewsFeed from './components/NewsFeed';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';


function App() {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // if (!sessionUser) history.push('/');
  // if (!sessionUser) {
  //   return <Redirect to="/" />
  // }
  

  return (
    <Switch>
      <AuthRoute exact path="/" component={LoginForm}></AuthRoute>

      <ProtectedRoute exact path="/users/:userId" component={UserProfile}></ProtectedRoute>

      <ProtectedRoute exact path="/newsfeed" component={NewsFeed}></ProtectedRoute>
      
    </Switch>
  )
}

export default App;