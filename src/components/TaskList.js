import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TaskItem from './TaskItem';

class Tasklist extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	renderAllTasks() {
		console.log('renderAllTasks running')
		let displayTasks = [];
		for (let thisTask in this.props.allTasks) {
			displayTasks.push(
				<TaskItem 
					task={thisTask} 
					completeTask={this.props.completeTask}
				/>
			);
		}
		return displayTasks;
	}

	render() {
		console.log(this.props.allTasks)
		return  (
			<ul>
				{this.renderAllTasks()}
			</ul>	
		)
	}
}

export default Tasklist;
