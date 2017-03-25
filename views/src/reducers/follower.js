import { ADD_FOLLOWERS } from '../actions/types';

const INITIAL_STATE = { followers: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FOLLOWERS:
            return { ...state, followers: action.payload };
        default:
          return state;
    }
}
