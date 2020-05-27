import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const fetchData = () => dispatch => {
    // return dispatch => {
    // dispatch({
    //     type: FETCH_DATA
    // });
    dispatch({ type: FETCH_DATA})
    axios
        .get('https://www.potterapi.com/v1/sortingHat')
        .then(res => {
            console.log('res', res)
            const newHouse = res.data
            // () => {
            //     return newHouse(res.data)
            // }
            dispatch({ type: DATA_SUCCESS, payload: newHouse})
        })        
        .catch(err => {
            console.log('err', err)
            dispatch({ type: DATA_FAILURE, payload: err})
        })
    }
// }