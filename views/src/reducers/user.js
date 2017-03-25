import { ADD_USER_A, ADD_USER_B } from '../actions/types';

const INITIAL_STATE = { users: { userA: null, userB: null } };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USER_A:
            // console.log(`action.payload: UserA: ${action.payload}`);
            return { ...state, users: { userB: state.users.userB, userA: action.payload } };
        case ADD_USER_B:
            // console.log(`action.payload: UserB: ${action.payload}`);
            return { ...state, users: { userA: state.users.userA, userB: action.payload } };
        default:
          return state;
    }
}
