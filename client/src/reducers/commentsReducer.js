export default (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return state.concat(action.comment)
        default:
            return state
    }
}