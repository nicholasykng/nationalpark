export const fetchPets = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PARKS"})
       .then(resp => resp.json())
       .then(data => {
           dispatch({type: "ADD_PARKS", parks: data})
       })
            
    }
}