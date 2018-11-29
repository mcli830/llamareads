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
        book: action.payload.book,
        note: action.payload.note || state.note
      }
    case 'VIEW_STORY':
      return {
        ...state,
        story: action.payload.story,
        book: action.payload.book || state.book,
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
