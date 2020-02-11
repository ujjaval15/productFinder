import { combineReducers } from 'redux';
import fetchProductsReducer from './fetchProductsReducer';
import toggleIconStateReducer from './toggleIconStateReducer';
import scrollPositionReducer from './scrollPositionReducer';

export default combineReducers({
    products: fetchProductsReducer,
    showBackToTopIcon: toggleIconStateReducer,
    scrollPosition: scrollPositionReducer
});