import uuid from 'uuid';
import { GET_TIPS, ADD_TIP, DELETE_TIP, TIPS_LOADING } from '../actions/types';

const initialState = {
    tips: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TIPS:
            return {
                ...state,
                tips: action.payload,
                loading: false
            };

        case DELETE_TIP:
            return {
                ...state,
                tips: state.tips.filter(tip => tip._id !== action.payload)
            };

        case ADD_TIP:
            return {
                ...state,
                tips: [action.payload, ...state.tips]
            };

        case TIPS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}
