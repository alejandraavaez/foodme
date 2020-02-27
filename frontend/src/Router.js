import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/index/Index';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
// import Logout from './components/logout/Logout';
import NotFound from './components/404/NotFound.js';
import { ThemeProvider } from '@chakra-ui/core';
import Context from './context'
import FormNewFood from './components/formData/formData';

const Router = () => (
  <BrowserRouter>
    <Context>
    <ThemeProvider>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/food" component={FormNewFood}  />
      <Route extact path="/profile" component={Profile} />
      {/* <Route exact path="/logout" component={Logout} /> */}
      <Route component={NotFound} />
    </Switch>
    </ThemeProvider>
    </Context>
  </BrowserRouter>
);

export default Router;
