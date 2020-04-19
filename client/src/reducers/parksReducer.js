const parksReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING_PARKS":
            return state
        case "FETCH_PARKS":
            return action.parks
        case "FETCH_PARK":
            return action.park
        case "ADD_PARK":
            return state.concat(action.park)
        case "REMOVE_PARKS":
            return state.filter(park => park.id !== action.id)
        case "LIKE_PARK":
            return state.map((park) => {
                if (park.id === action.park.id) {
                    return action.park
                } else {
                    return park
                }
            })
        default:
            return state
    }
}
export default parksReducer