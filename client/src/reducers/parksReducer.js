const parksReducer = (state = {parks: []}, action) => {
    switch (action.type) {
        case "LOADING_PARKS":
            return {...state, parks: [...state.parks]}
        case "ADD_PARKS":
            return {...state, parks: action.parks}
        case "REMOVE_PARKS":
            return state.filter(park => park.id !== action.id)
        default:
            return state
    }
}
export default parksReducer