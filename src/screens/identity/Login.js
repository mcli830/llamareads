import React from 'react'
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withHandlers, setPropTypes, withStateHandlers  } from "recompose";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';


const enhance = compose(
    firebaseConnect(),
    connect(({ firebase: { auth } }) => ({ auth })),
    setPropTypes({
      showError: PropTypes.func.isRequired,
      firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
      })
    }),
    withHandlers({
        emailLogin: ({ firebase, router, showError }) => creds =>
        firebase.login(creds).catch(err => showError(err.message))
    }),
    withStateHandlers(
        ({ initialVal = '' }) => ({
            email: initialVal,
            password: initialVal
        }),
        {
            onEmailChange: ({ email }) => (e) => ({ email: e.target.value }),
            onPasswordChange: ({ password }) => (e) => ({ password: e.target.value })
        }
    )
)

const Login = ({ firebase, auth, email, password, emailLogin, onPasswordChange, onEmailChange }) => (
    <button 
    onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
  >Login With Google</button>
)

Login.propTypes = {
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    emailLogin: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
}

export default enhance(Login)