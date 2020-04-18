export const fetchComments = (parkId) => {
    return dispatch => {
        dispatch({type: "LOADING_COMMENTS"})
        return fetch(`http://localhost:3000/parks/${parkId}/comments`)
        .then(response => response.json())
        .then(comments => dispatch(setComments(comments)))
    }
}

const setComments = comments => {
    return {
        type: "FETCH_COMMENTS",
        comments
    }
}