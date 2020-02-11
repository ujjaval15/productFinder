import { SCROLL_POSITION } from '../actions/types';

const INITIAL_STATE = {
    scrollPosition: 0
};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case SCROLL_POSITION: {
            console.log("Inside SCROLL_POSITION");
            return {...state, scrollPosition: action.payload }
        }
        default:
            return state;
    };
};