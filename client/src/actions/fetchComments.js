export const fetchComments = (parkId) => {
    return dispatch => {
        dispatch({type: "LOADING_COMMENTS"})
        return fetch(`https://national-park.herokuapp.com/parks/${parkId}/comments`)
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