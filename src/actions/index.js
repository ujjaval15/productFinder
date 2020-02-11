import axios from 'axios';
import { 
    FETCH_PRODUCTS,
    SHOW_ICON, 
    HIDE_ICON,
    SCROLL_POSITION } from './types';

export const fetchProducts = () => async dispatch => {
    let obj = {};
    const res = await axios.get('http://localhost:4200/alphabetsWordsList');
    res.data.forEach(product => {
        if(obj[product.slice(0, 1)]) {
            obj[product.slice(0, 1)].push(product);
        } else {
            obj[product.slice(0, 1)] = [product]
        }
    });
    dispatch({
        type: FETCH_PRODUCTS,
        payload: obj
    });
};

export const showIcon = () => {
    console.log('showIcon action creator');
    return {
        type: SHOW_ICON
    };
}; 

export const hideIcon = () => {
    console.log('hideIcon action creator');
    return {
        type: HIDE_ICON
    };
}; 

export const setScrollPosition = (scrollPosition) => {
    console.log('setScrollPosition action creator');
    return {
        type: SCROLL_POSITION,
        payload: scrollPosition
    };
};