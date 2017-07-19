import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TaskField from './TaskField';
import CategoryTab from  './CategoryTab';
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
			category: 'Active'
		}
	}
	changeCategory = (category) => {
		this.setState({
			category: category
		})
	}
	// Adds a single item to the list
	// addTaskItem = () => {
	// 	let tasksCopy = Object.assign(this.state.tasks);
	// 	// let tasksCopy = Array.prototype.slice.call(this.state.tasks);
	// 	// tasksCopy.push(<TaskItem />)
	// 	// this.setState({
	// 	// 	tasks: tasksCopy
	// 	// })
	// }

	render() {
		console.log('Category is currently: ' + this.state.category)
		return  (
			<div>
				<h1>From TaskContainer</h1>
				<CategoryTab changeCategory={this.changeCategory} category={'Active'}/>
				<CategoryTab changeCategory={this.changeCategory} category={'Completed'}/>
				<CategoryTab changeCategory={this.changeCategory} category={'All'}/>
				<TaskField />
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