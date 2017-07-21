import React, { Component } from 'react';

// Task row; includes a checkbox for user to check and delete task from list
class TaskItem extends Component {
	render() {
		return  (
			<li onClick={() => {
				
				this.props.completeTask(this.props.task)
				console.log(this)
				
				}}>
				{this.props.task}
			</li>
		)
	}
}

export default TaskItem;