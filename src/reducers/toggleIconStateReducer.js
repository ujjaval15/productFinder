import { SHOW_ICON, HIDE_ICON } from '../actions/types';

const INITIAL_STATE = { 
    showBackToTopIcon: false
};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case SHOW_ICON: {
            console.log("Inside SHOW ICON");
            return {...state, showBackToTopIcon: true }
        }
        case HIDE_ICON: {
            console.log("HIDE_ICON");
            return {...state, showBackToTopIcon: false }
        }
        default:
            return state;
    }
}