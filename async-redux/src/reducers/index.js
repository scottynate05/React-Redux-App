import { FETCH_DATA, DATA_SUCCESS, DATA_FAILURE } from '../actions/index';

const initialState = {
    newHouse: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state
            }
        case DATA_SUCCESS:
            return {
                ...state,
                newHouse: action.payload,
                error: ''
            }
        case DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
};