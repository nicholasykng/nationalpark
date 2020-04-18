const parksReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING_PARKS":
            return state
        case "FETCH_PARKS":
            return action.parks
        case "FETCH_PARK":
            return action.park
        case "REMOVE_PARKS":
            return state.filter(park => park.id !== action.id)
        default:
            return state
    }
}
export default parksReducer