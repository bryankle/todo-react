import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
 
class CategoryTab extends Component {

	render() {

		return  (
			<Button 
                onClick={() => {
                    console.log(this.props.category)
                    this.props.changeCategory(this.props.category);
                    }}
                >
                {this.props.category}
            </Button>
		)
	}
}

export default CategoryTab;
