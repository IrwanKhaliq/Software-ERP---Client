import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Payment from './components/Payment/Payment'
import Tiers from './components/Tiers/Tiers'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/payment" component={Payment} />
        <Route path="/tiers/:category" component={Tiers} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
