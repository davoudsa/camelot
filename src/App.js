import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'; 
import HomePage from './pages/homepage/homepage.component';

import HousesPage from './pages/houses/houses.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/houses' component={HousesPage} />
      </Switch>
    </div>
  );
}

export default App;
