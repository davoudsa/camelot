import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'; 
import HomePage from './pages/homepage/homepage.component';

const ForSale = () => (
  <div>
    <h1>For Sale</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/ForSale' component={ForSale} />
      </Switch>
    </div>
  );
}

export default App;
