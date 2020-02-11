import { FETCH_PRODUCTS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_PRODUCTS: {
            console.log(action.payload);
            return { ...state, ...(action.payload) };
        }
        default:
            return state;
    }
};