import axios from 'axios';
import { GET_TIPS, ADD_TIP, DELETE_TIP, TIPS_LOADING } from './types';

export const getTips = () => dispatch => {
    dispatch(setTipsLoading());
    axios
        .get('/api/tips')
        .then(res =>
            dispatch({
                type: GET_TIPS,
                payload: res.data
            })
        );
};

export const deleteTip = id => {
    return {
        type: DELETE_TIP,
        payload: id
    };
};

export const addTip = tip => {
    return {
        type: ADD_TIP,
        payload: tip
    };
};

export const setTipsLoading = () => {
    return {
        type: TIPS_LOADING
    };
};
