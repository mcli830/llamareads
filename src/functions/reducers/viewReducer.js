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
