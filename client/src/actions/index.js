const rootReducer = (state = {parks: []}, action) => {
    switch (action.type) {
        case "ADD_PARKS":
            return {...state, parks: [state.parks, action.parks]}
        default:
            return state
    }
}
export default rootReducer