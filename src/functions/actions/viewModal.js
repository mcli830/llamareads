export default (modal = '', book = null, note = null, inbox = null, date = null) => ({
  type: 'VIEW_MODAL',
  payload: {
    modal,
    book,
    note,
    inbox,
    date
  }
}
)
