import { combineReducers } from 'redux';
import users from './user';
import followers from './follower';

const rootReducer = combineReducers({
    users, followers
});

export default rootReducer;
