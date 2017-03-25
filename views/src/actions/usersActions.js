import { ADD_USER_A, ADD_USER_B } from './types';

export const addUserA = (userA) => (
    {
        type: ADD_USER_A,
        payload: userA
    }
);
export const addUserB = (userB) => (
    {
        type: ADD_USER_B,
        payload: userB
    }
);
