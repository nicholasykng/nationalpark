export default (state = [], action) => {
    switch (action.type) {
        case "ADD_PARKS":
            return state.concat(action.park)
        case "REMOVE_PARKS":
            return state.filter(park => park.id !== action.id)
        default:
            return state
    }
}