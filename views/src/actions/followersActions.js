import { ADD_FOLLOWERS } from './types';

export const addFollowers = (followers) => (
    {
        type: ADD_FOLLOWERS,
        payload: followers
    }
);
