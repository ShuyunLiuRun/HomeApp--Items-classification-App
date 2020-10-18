import { Router, Route, Link } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import App from '../App.js'

const Routing = (
    <Router>
    <div>
      <Route path="/" component={App} />
      {/* <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>
)

export default Routing;