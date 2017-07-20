import React, { Component } from 'react';

// Task row; includes a checkbox for user to check and delete task from list
class TaskItem extends Component {
	render() {
		return  (
			<li>
				{this.props.task}
			</li>
		)
	}
}

export default TaskItem;