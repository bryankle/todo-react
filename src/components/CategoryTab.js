import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
 
class CategoryTab extends Component {

	render() {

		return  (
			<div>
                <Button>{this.props.category}</Button>
			</div>
		)
	}
}

export default CategoryTab;
