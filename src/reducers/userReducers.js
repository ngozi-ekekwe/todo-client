import  * as types from '../actions/actionTypes';
import initialState from './initialState';

let newState;
 
export default function todoReducer(state = initialState.todos, action) {
    switch (action.type) {
        case types.CREATE_TODO:
          return [...state, Object.assign({}, action.todo)];

        case types.FETCH_TODOS:
            return [...state, Object.assign({}, action.todo)];

        case types.DELETE_TODO:
        newState = state.filter(todo => todo.id !== action.id);
        return newState;
        
        default:
          return state;
      }
}