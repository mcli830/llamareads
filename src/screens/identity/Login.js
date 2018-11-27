import React, { Component } from "react"
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withHandlers, setPropTypes, withStateHandlers  } from "recompose";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

// class Login extends Component {
// state = { isSignedIn: false }
// uiConfig = {
//   signInFlow: "popup",
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   callbacks: {
//     signInSuccess: () => false
//   }
// }

// componentDidMount = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     this.setState({ isSignedIn: !!user })
//     console.log("user", user)
//   })
// }

// render() {
//   return (
//         <StyledFirebaseAuth
//           uiConfig={this.uiConfig}
//           firebaseAuth={firebase.auth()}
//         />
//   )
// }
// }

// export default Login

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
        emailSignup: ({ firebase, showError }) => creds =>
      firebase
        .createUser(creds, {
          email: creds.email,
          username: creds.username
        })
        .catch(err => showError(err.message))
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

const Login = ({ emailSignup, firebase, auth, email, password, onPasswordChange, onEmailChange }) => (
    <div>
    <button 
    onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
  >Login With Google</button>
    <form onSubmit={emailSignup}>
        <input type="text" name="email" id="email" value={email} onChange={onEmailChange}></input>
        <input type="password" name="password" id="password" value={password} onChange={onPasswordChange}></input>
        <input type="submit"></input>
    </form>
    </div>
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