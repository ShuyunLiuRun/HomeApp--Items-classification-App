import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const routing = (

//   <Router>
//     <div>
//       <Switch>
//         {/* <Route exact path="/:id" component={App} /> */}
//         <Route path="/form" component={AddItemForm}/>

//         <Route extra path="/" component={App} />
//       </Switch>
//     </div>
//   </Router>
// );

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA