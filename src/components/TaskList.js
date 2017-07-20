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
		for (let task in this.props.allTasks) {
			displayTasks.push(task);
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
