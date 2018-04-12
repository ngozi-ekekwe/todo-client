import { combineReducers } from 'redux';
import todos from './todoReducers';
import users from './userReducers';

const rootReducer = combineReducers({
    todos,
    // users
});

export default rootReducer;