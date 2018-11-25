import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import { firebase as fbConfig } from './api'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

export default function configureStore (initialState, history) {
  firebase.initializeApp(fbConfig)
  firebase.firestore().settings({ timestampsInSnapshots: true })

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase,
      {
        userProfile: 'users',
        useFirestoreForProfile: true,
        enableLogging: false
      }
    ),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}