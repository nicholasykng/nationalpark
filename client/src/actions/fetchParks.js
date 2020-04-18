export const fetchParks = () => {
    return dispatch => {
        dispatch({type: "LOADING_PARKS"})
        return fetch('http://localhost:3000/parks')
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

