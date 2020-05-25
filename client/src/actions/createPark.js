export const createPark = (park) => {
    return dispatch => {
        return fetch('https://national-park.herokuapp.com/parks', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({park: park})
        })
        .then(response => response.json())
        .then(park => {
            dispatch(addPark(park))
        })
    }
}

const addPark = park => {
    return {
        type: "ADD_PARK",
        park
    }
}
