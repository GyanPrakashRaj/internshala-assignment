import { combineReducers } from 'redux';
import todoReducer from '../logic/todos';
import filterReducer from '../logic/filter';

export default function createReducer() {
  return combineReducers({
    todos: todoReducer,
    filter: filterReducer,
  });
}
