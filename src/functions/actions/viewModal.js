export default (modal = '', book = null, note = null, inbox = null, date = null, journey = null) => ({
  type: 'VIEW_MODAL',
  payload: {
    modal,
    book,
    note,
    inbox,
    journey,
    date
  }
}
)
