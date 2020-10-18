import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddItemForm from './components/Item/AddItemForm.js'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/:id" component={App} /> */}
        <Route exact path="/form" component={AddItemForm}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA