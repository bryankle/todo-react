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
	_handleKeyPress = (e) => {
		if (e.charCode === 13) {
			this.props.addTask(this.state.newTask)
			this.setState({newTask: ''})
			alert('Success!')
		}
	}

	render() {
		return  (
			<div>
				<FormGroup bsSize="large">
			      <FormControl 
						onChange={this._handleChange} 
						onKeyPress={this._handleKeyPress}
						type="text" 
						placeholder="What are we doing now?" 
						value={this.state.newTask}
					/>
			    </FormGroup>
				{this.state.newTask}
			</div>
		)
	}
}

export default TaskField;