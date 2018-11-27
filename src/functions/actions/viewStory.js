export default (book = null, journey = null) => {
  action: 'VIEW_STORY',
  payload: book ? {story: true, book, journey} : {story: false}
}
