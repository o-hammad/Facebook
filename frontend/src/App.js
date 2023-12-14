import React from 'react';
import { Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import UserProfile from './components/UserProfile';
import NewsFeed from './components/NewsFeed';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import RouteChangeTracker from './components/RouteChangeTracker';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-XVWCGS3WX9";


ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});

ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});


function App() {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // if (!sessionUser) history.push('/');
  // if (!sessionUser) {
  //   return <Redirect to="/" />
  // }
  

  return (
    <>
      <RouteChangeTracker />
      <Switch>
        <AuthRoute exact path="/" component={LoginForm}></AuthRoute>

        <ProtectedRoute exact path="/users/:userId" component={UserProfile}></ProtectedRoute>

        <ProtectedRoute exact path="/newsfeed" component={NewsFeed}></ProtectedRoute>
        
      </Switch>
    </>
  )
}

export default App;