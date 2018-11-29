import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import GoogleButton from 'react-google-button'

export const LoginPage = ({ firebase, auth }) => (
  <div className="LoginPage">
    <div className="Login-form">
      <div className="Login-brand">
        <span className="red">L</span>
        <span className="red">l</span>
        <span className="yellow">a</span>
        <span className="dark-blue">m</span>
        <span className="light-blue">a</span>
      </div>
      <div className="Login-logo" />
      <div className="GoogleButton-wrapper">
        <GoogleButton
          onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
        >Login With Google</GoogleButton>
      </div>
    </div>
  </div>
)

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage)
