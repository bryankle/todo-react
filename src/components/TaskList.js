import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TaskItem from './TaskItem';

class Tasklist extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return  (
			<ul>
				<TaskItem />
			</ul>	
		)
	}
}

export default Tasklist;
