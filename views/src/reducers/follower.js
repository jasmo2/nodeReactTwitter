import { ADD_USERS, ADD_USER_A, ADD_USER_B } from '../actions/types';

const INITIAL_STATE = { followers: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USERS:
            return { ...state, followers: action.payload };
        default:
          return state;
    }
}
