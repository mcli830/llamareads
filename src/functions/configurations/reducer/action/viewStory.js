export const viewStory = (story = false, book = null) => ({
  type: 'VIEW_STORY',
  payload: {
    story,
    book
  }
})

export default viewStory;