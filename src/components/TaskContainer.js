import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { Button } from 'react-bootstrap';

/*
	TaskContainer
		TaskField
		TaskList
			TaskItem (multiple)
*/

class TaskContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tasks: {}
		}
	}
	// Adds a single item to the list
	addTaskItem = () => {
		let tasksCopy = Object.assign(this.state.tasks);
		// let tasksCopy = Array.prototype.slice.call(this.state.tasks);
		// tasksCopy.push(<TaskItem />)
		// this.setState({
		// 	tasks: tasksCopy
		// })
	}

	render() {
		return  (
			<div>
				
				<Button onClick={this.addTaskItem}>Add Task</Button>
				<h1>From TaskContainer</h1>
				<ul>
				</ul>	
			</div>
		)
	}
}

export default TaskContainer;
// For now, focus on allowing user to add and delete task; no sorting yet
// Let 'tasks' be a state object that contains information related to each individual task
/* Example
	tasks: {
		'eating': {
			idx: 0,
			completed: true
		}
	}
*/