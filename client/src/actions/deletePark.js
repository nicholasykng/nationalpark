export const deletePark = (parkId, routerHistory) => {
    return dispatch => {
        return fetch(`https://national-park.herokuapp.com/parks/${parkId}`, {
            method: "DELETE",
        })
        .then(response => {
            dispatch(removePark(parkId))
            routerHistory.replace('/parks')
        })
    }
}

const removePark = id => {
    return {
        type: "REMOVE_PARK",
        id
    }
}