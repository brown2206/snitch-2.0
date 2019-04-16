import uuid from 'uuid';
import { GET_TIPS, ADD_TIP, DELETE_TIP } from '../actions/types';

const initialState = {
    tips: [
        { id: uuid(), offense: 'Murder', date: '10/10/2011', description: 'gruesome', location: 'DC', suspect: 'Hispanic Male' },
        { id: uuid(), offense: 'Rape', date: '7/8/2002', description: 'college', location: 'FL', suspect: 'White Male' },
        { id: uuid(), offense: 'Robbery', date: '5/2/2013', description: 'liquor store', location: 'NY', suspect: 'Asian Female' },
        { id: uuid(), offense: 'Assault', date: '9/7/2018', description: 'club', location: 'PA', suspect: 'Hispanic Male' }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TIPS:
            return {
                ...state
            };

        case DELETE_TIP:
            return {
                ...state,
                tips: state.tips.filter(tip => tip.id !== action.payload)
            };

        default:
            return state;
    }
}
