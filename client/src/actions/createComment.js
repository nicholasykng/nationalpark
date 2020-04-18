export const createComment = (comment) => {
    return dispatch => {
        return fetch(`http://localhost:3000/parks/${comment.parkId}/comments`, {
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