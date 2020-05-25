export const likePark = (park) => {
    const updatePark = {...park, likes: park.likes + 1}
    return dispatch => {
        return fetch(`https://national-park.herokuapp.com/parks/${park.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({park: updatePark})
        })
        .then(response => response.json())
        .then(park => {
            dispatch(addLikes(park))
        })
    }
}

const addLikes = park => {
    return {
        type: "LIKE_PARK",
        park
    }
}