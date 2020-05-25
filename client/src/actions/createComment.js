export const createComment = (comment) => {
    return dispatch => {
        return fetch(`https://national-park.herokuapp.com/parks/${comment.park_id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({comment: comment})
        })
        .then(response => response.json())
        .then(comment => {
            dispatch(addComment(comment))
        })
    }
}

const addComment = comment => {
    return {
        type: "ADD_COMMENT",
        comment
    }
}