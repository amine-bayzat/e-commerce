import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfile } from './firebase/firebase.config';

class App extends Component {

  unsubcribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => { // Here we're listing to the authStateChanged method to check if there's an authUser object or not
      if (userAuth) { 
        const userRef = await createUserProfile(userAuth);

        // Subscribe to the snapshot and the update the state with snapshop object
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
