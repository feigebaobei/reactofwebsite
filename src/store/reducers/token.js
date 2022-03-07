let tokenReducer = (state = '', action) => {
    switch(action.type) {
        case 'reset':
            return state = action.payload
        default:
            return state
    }
}
export default tokenReducer