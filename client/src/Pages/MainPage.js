import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cars from './Cars';
import Login from './Login';
import Signup from './Signup'
import About from './About'
import Faqs from './Faqs';
import Contact from './Contact';
import Car from './Car';
import User from './User';

export default function () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cars">
          <Cars/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/faqs">
          <Faqs/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/car">
          <Car/>
        </Route>
        <Route exact path="/user">
          <User/>
        </Route>
      </Switch>
    </Router >
    </>
  )
}
