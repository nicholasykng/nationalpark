export const fetchParks = () => {
    return dispatch => {
        dispatch({type: "LOADING_PARKS"})
        return fetch('http://localhost:3000/parks')
        .then(response => response.json())
        .then(park => dispatch(setParks(park)))
         
    }
}
const setParks = parks => {
    return {
      type: 'FETCH_PARKS',
      parks
    }
  }

export const fetchPark = (parkId) => {
  return dispatch => {
    return fetch(`http://localhost:3000/parks/${parkId}`)
    .then(response => response.json())
    .then(park => {
      dispatch(setPark([park]))
    })
  }
}

const setPark = park => {
  return {
    type: "FETCH_PARK",
    park
  }
}