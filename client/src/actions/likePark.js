export const likePark = (park) => {
    console.log(park)
    const updatePark = {...park, likes: park.likes + 1}
    return dispatch => {
        return fetch(`http://localhost:3000/parks/${park.id}`, {
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