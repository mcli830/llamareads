import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withStateHandlers, withHandlers } from 'recompose'
import { withFirestore } from 'react-redux-firebase'
import '../App.css'

class ProtectedPage extends Component {
  static propTypes = {
    authExists: PropTypes.bool,
  }

  componentWillReceiveProps({ authExists }) {
    if (authExists) {
      this.context.router.push('/login')
    }
  }

  render() {
    return (
      <div>
        You are authed!
      </div>
    )
  }
}

export default connect(
  ({ firebase: { auth } }) => ({ authExists: !!auth && !!auth.uid })
)(ProtectedPage)