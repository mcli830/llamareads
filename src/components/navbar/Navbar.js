import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withHandlers, branch, renderNothing } from 'recompose';
import { withFirestore } from 'react-redux-firebase';

// linked component
import Brand from './brand';
import UserMenu from './usermenu';

const Navbar = ({ user }) => {
  render() {
    return (
      <div className="Navbar">
        <Brand />
        <UserMenu user={user} />
      </div>
    );
  }
}

export default Navbar;