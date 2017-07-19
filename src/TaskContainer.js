import React, { Component } from 'react';
import TaskItem from './TaskItem';

import { Button } from 'react-bootstrap';

class TaskContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tasks: []
		}
	}
	// Adds a single item to the list
	addTaskItem = () => {
		let tasksCopy = Array.prototype.slice.call(this.state.tasks);
		tasksCopy.push(<TaskItem />)
		this.setState({
			tasks: tasksCopy
		})
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