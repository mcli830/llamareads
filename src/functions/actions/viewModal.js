export default (modal = '', book = null, note = null) => ({
  type: 'VIEW_MODAL',
  payload: {
    modal,
    book,
    note
  }
}
)
