import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withStateHandlers, withHandlers } from 'recompose'
import { withFirestore } from 'react-redux-firebase'
import '../App.css'

const enhance = compose(
  withFirestore,
  withStateHandlers(
    ({ initialVal = '' }) => ({
      inputVal: initialVal
    }),
    {
      onInputChange: ({ inputVal }) => (e) => ({ inputVal: e.target.value }),
      resetInput: ({ inputVal }) => (e) => ({ inputVal: e.target.value })
    }
  ),
  withHandlers({
    addBook: props => () =>
      props.firestore.add('books', { title: props.inputVal || 'PAX', read: false })
  })
)

const NewBook = ({ books, addBook, inputVal, onInputChange, resetInput }) => (
  <div>
    <h4>Send new Book to Firestore</h4>
    <input value={inputVal} onChange={onInputChange} />
    <button onClick={addBook}>Add</button>
    <button onClick={resetInput}>Cancel</button>
  </div>
)

NewBook.propTypes = {
  firestore: PropTypes.shape({ // from enhnace (withFirestore)
    add: PropTypes.func.isRequired,
  }),
  addBook: PropTypes.func.isRequired, // from enhance (withHandlers)
  books: PropTypes.array
}

export default enhance(NewBook)