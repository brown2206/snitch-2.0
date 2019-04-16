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

export const addTip = tip => dispatch => {
    axios
        .post('/api/tips', tip)
        .then(res =>
            dispatch({
                type: ADD_TIP,
                payload: res.data
            })
        );
};

export const deleteTip = id => dispatch => {
    axios
        .delete(`/api/tips/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TIP,
                payload: id
            })
        );
};

export const setTipsLoading = () => {
    return {
        type: TIPS_LOADING
    };
};
