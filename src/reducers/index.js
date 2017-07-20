import { combineReducers } from 'redux';
import reducerAddTask from './reducer-add-task';

const rootReducer = combineReducers({
	allTasks: reducerAddTask
})

export default rootReducer;