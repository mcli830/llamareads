export const viewModal = (modal = '', book = null) => ({
    type: 'VIEW_MODAL',
    payload: {
        modal,
        book
    }
})

export default viewModal;