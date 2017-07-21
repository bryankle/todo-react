import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TaskField from '../components/TaskField';
import TaskList from '../components/TaskList';
import CategoryTab from  '../components/CategoryTab';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/add-task';
import { completeTask } from '../actions/complete-task';
/*
	TaskContainer
		TaskField
		TaskList
			TaskItem (multiple)
*/

// Introduce redux function to add and pass down to TaskField

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
		console.log(this.props)
		console.log('Category is currently: ' + this.state.category)
		console.log('From Redux... ' + this.props.allTasks)
		return  (
			<div>
				<h1>From TaskContainer</h1>
				<CategoryTab changeCategory={this.changeCategory} category={'Active'}/>
				<CategoryTab changeCategory={this.changeCategory} category={'Completed'}/>
				<CategoryTab changeCategory={this.changeCategory} category={'All'}/>
				<TaskField addTask={this.props.addTask}/>
				<TaskList
					category={this.state.category}
					allTasks={this.props.allTasks}
					completeTask={this.props.completeTask}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    allTasks: state.allTasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTask, completeTask}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
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