import React, { Component } from 'react';

// Task row; includes a checkbox for user to check and delete task from list
class TaskItem extends Component {
	render() {
		return  (
			<li onClick={() => {alert(this.props.task, 'clicked!')}}>
				{this.props.task}
			</li>
		)
	}
}

export default TaskItem;