export const appReducer = (state = {
  view: {
    modal: '',
    story: false,
  },
  book: null
}, action) => {
  switch(action.type){
    case 'VIEW_MODAL':
      return {
        ...state,
        view: {
          ...state.view,
          modal: action.payload.modal
        },
        book: action.payload.book
      }
    default:
      return state
  }
}