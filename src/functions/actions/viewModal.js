export default (modal = '', book = null) => ({
  type: 'VIEW_MODAL',
  payload: {
    modal,
    book
  }
}
)
