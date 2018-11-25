import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withHandlers, branch, renderNothing } from 'recompose'
import { withFirestore } from 'react-redux-firebase'

const enhance = compose(
  branch(({ book }) => !book, renderNothing),
  withFirestore,

  withHandlers({
    toggleRead: ({ firestore, book }) => () =>
      firestore.update({ collection: 'books', doc: book.id }, { read: !book.read }),
    deleteBook: ({ firestore, book }) => () =>
      firestore.delete({ collection: 'books', doc: book.id })
  })
)

const Book = ({ deleteBook, toggleRead,  book }) => (
  <li>
    <input
      className="Book-Input"
      type="checkbox"
      checked={book.read}
      onChange={toggleRead}
    />
    {book.title}
    <button className="Book-Button" onClick={deleteBook}>
      Delete
    </button>
  </li>
)

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string
  }),
  firestore: PropTypes.shape({
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
  }),
  deleteBook: PropTypes.func,
}

export default enhance(Book)