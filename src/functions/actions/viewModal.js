export default (modal = '', book = null, note = null, inbox = null) => ({
  type: 'VIEW_MODAL',
  payload: {
    modal,
    book,
    note,
    inbox
  }
}
)
