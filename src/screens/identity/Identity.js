import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withStateHandlers } from "recompose";

import Login from "./Login"

const enhance = compose(
  withStateHandlers({
      subScreen: "login"
  }),
);

function renderSwitch(subScreen) {
  switch(subScreen) {
    case 'login':
      return <Login />;
    default:
      return <Login />;
  }
}

const Identity = ({ subScreen }) => (
  <div>
    {renderSwitch()}
  </div>
)

Identity.propTypes = {
  subScreen: PropTypes.string
}

export default enhance(Identity)