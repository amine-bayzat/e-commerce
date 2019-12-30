import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CardItem from '../card-items/card-items.component';
import CardDropdown from '../card-dropdown/card-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.config';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
        : <Link className='option' to='/signin'>
            SIGN IN
          </Link>
      }
      <CardItem></CardItem>
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, card: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);