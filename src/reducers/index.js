import { combineReducers } from 'redux';
import reducerAddTask from './reducer-add-task';
import reducerCompleteTask from './reducer-complete-task';

const rootReducer = combineReducers({
	allTasks: reducerAddTask
})

export default rootReducer;