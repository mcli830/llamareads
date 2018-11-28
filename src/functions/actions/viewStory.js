export default (book = null, journey = null) => ({
  type: 'VIEW_STORY',
  payload: book ? {story: true, book, journey} : {story: false}
})
