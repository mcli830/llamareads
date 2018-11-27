export default (modal = '', book = null) => {
  type: 'VIEW_NODE',
  payload: {
    modal,
    book
  }
}
