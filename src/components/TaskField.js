import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
// Enter new task into field and hit enter to add task to list
class TaskField extends Component {

	render() {
		return  (
			<div>
				<FormGroup bsSize="large">
			      <FormControl type="text" placeholder="Large text" />
			    </FormGroup>
			</div>
		)
	}
}

export default TaskField;