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

import '../../stylesheets/css/login.css'

class Login extends Component {
state = { isSignedIn: false }
uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ isSignedIn: !!user })
    console.log("user", user)
  })
}

render() {
  return (
      <div>
          <center><img className="logo" src="https://trello-attachments.s3.amazonaws.com/5bfa29de4601a17e014885b0/5bfa2e74602f08381d4f1e4d/ace25c15033d1613e915d986f4450ef6/logo.png"></img></center>
          <center className="title">LLAMA</center>
          <center className="subTitle">Login to continue</center>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
         <div className="footer">
         © 2018-2019 . Llama
         </div>
    </div>
  )
}
}

export default Login