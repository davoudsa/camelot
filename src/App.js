import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'; 
import HomePage from './pages/homepage/homepage.component';

import HousesPage from './pages/houses/houses.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState( { currentUser: user } );
    }
    );
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }


  render() {
  return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/houses' component={HousesPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />        

        </Switch>
      </div>
    );
  }
}

export default App;
