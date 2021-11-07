import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UsersTable } from './components/UsersTable';
import { CurrentCoin } from './components/CurrentCoin'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={UsersTable}></Route>
          <Route exact path='/:name' component={CurrentCoin}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



// 9df7e45a-799b-4783-9cbf-6df15294991f