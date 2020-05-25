export const fetchParks = () => {
    return dispatch => {
        dispatch({type: "LOADING_PARKS"})
        return fetch('https://national-park.herokuapp.com/parks')
        .then(response => response.json())
        .then(parks => dispatch(setParks(parks)))
         
    }
}

const setParks = parks => {
    return {
      type: 'FETCH_PARKS',
      parks
    }
  }

