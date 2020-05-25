export const fetchPark = (parkId) => {
    return dispatch => {
      return fetch(`https://national-park.herokuapp.com/parks/${parkId}`)
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