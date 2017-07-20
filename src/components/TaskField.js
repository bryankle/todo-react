import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
// Enter new task into field and hit enter to add task to list
class TaskField extends Component {

	constructor(props) {
		super(props)
		this.state = {
			newTask: ''
		}
	}

	_handleChange = (e) => {
		this.setState({newTask: e.target.value})
	}

	render() {
		return  (
			<div>
				<FormGroup bsSize="large">
			      <FormControl onChange={this._handleChange} type="text" placeholder="Large text" />
			    </FormGroup>
				{this.state.newTask}
			</div>
		)
	}
}

export default TaskField;