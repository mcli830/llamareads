export const appReducer = (state = {
  view: {
    modal: '',
    story: false,
  },
  book: null,
  journey: null
}, action) => {
  switch (action.type) {
    case "VIEW_MODAL":
      return { ...state, view: { ...state.view, modal: action.payload.modal }, book: action.payload.book || state.book };
    case "VIEW_STORY":
      return { ...state, view: { ...state.view, story: action.payload.stroy }, book: action.payload.book || state.book };
    default:
      return state;
  }
}