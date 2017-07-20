import { combineReducers } from 'redux';
import reducerAddTask from './reducer-add-task';

const rootReducer = combineReducers({
	addTask: reducerAddTask
})

export default rootReducer;