// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import FoodList from './components/FoodList';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/food" component={FoodList} />
          <Route path="/order" component={Order} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

