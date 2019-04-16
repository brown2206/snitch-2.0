import { GET_TIPS, ADD_TIP, DELETE_TIP } from './types';

export const getTips = () => {
    return {
        type: GET_TIPS
    };
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
