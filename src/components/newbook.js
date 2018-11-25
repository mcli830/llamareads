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
      inputTitle: initialVal,
      inputAuthor: initialVal,
      inputExcerpt: initialVal
    }),
    {
      onInputTChange: ({ inputTitle }) => (e) => ({ inputTitle: e.target.value }),
      onInputAChange: ({ inputAuthor }) => (e) => ({ inputAuthor: e.target.value }),
      onInputEChange: ({ inputExcerpt }) => (e) => ({ inputExcerpt: e.target.value }),
      resetInput: ({ inputTitle }) => (e) => ({ inputVal: e.target.value })
    }
  ),
  withHandlers({
    addBook: props => () =>
      props.firestore.add('books', { title: props.inputTitle, author: props.inputAuthor, excerpt: props.inputExcerpt })
  })
)

const NewBook = ({ books, addBook, onInputAChange, onInputEChange, onInputTChange, resetInput, inputTitle, inputAuthor, inputExcerpt }) => (
  <div>
    <h4>Send new Book to Firestore</h4>
    <input value={inputTitle} onChange={onInputTChange} />
    <input value={inputAuthor} onChange={onInputAChange} />
    <input value={inputExcerpt} onChange={onInputEChange} />
    <button onClick={addBook}>Add</button>
    <button onClick={resetInput}>Cancel</button>
  </div>
)

NewBook.propTypes = {
  firestore: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }),
  addBook: PropTypes.func.isRequired,
  books: PropTypes.array
}

export default enhance(NewBook)