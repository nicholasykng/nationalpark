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
