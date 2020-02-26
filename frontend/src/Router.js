import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
// import Logout from './components/logout/Logout';
import NotFound from './components/404/NotFound.js';
import { ThemeProvider } from '@chakra-ui/core';
import Context from './context'

const Router = () => (
  <BrowserRouter>
    <Context>
    <ThemeProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      {/* <Route exact path="/logout" component={Logout} /> */}
      <Route component={NotFound} />
    </Switch>
    </ThemeProvider>
    </Context>
  </BrowserRouter>
);

export default Router;
