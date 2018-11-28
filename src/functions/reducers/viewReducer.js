export default (state = {
  modal: '',
  story: false,
  book: null,
  journey: null,
  friend: null,
  note: ""
}, action) => {
  switch(action.type) {
    case 'VIEW_MODAL':
      return {
        ...state,
        modal: action.payload.modal,
        book: action.payload.book
      }
    case 'VIEW_STORY':
      return {
        ...state,
        story: action.payload.story,
        book: action.payload.book,
        journey: action.payload.journey
      }
    case 'SELECT_FRIEND':
      return {
        ...state,
        friend: action.payload.friend
      }
    case 'WRITE_NOTE':
      return {
        ...state,
        note: action.payload.note
      }
    default:
      return state;
  }
}

// book_object = {
//   title,
//   author,
//   cover,
//   excerpt,
//   owner_id,
//   journey_id
// }
