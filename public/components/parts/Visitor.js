import React from 'react'

import AppActions from '../../actions/AppActions'

import AppStore from '../../stores/AppStore'

import AppConstants from '../../constants/AppConstants'


class Visitor extends React.Component {
	//receive all proptypes that are passed from Visitors component
	constructor(){
		super();
        this.removeVisitor = this.removeVisitor.bind(this);
        this.editVisitor = this.editVisitor.bind(this);
	}

	propTypes: {
		visitor: React.PropTypes.object.isRequired,
	}

	componentDidMount(){
		
	}

	componentWillUnmount(){
	
	}

	removeVisitor(event){
		event.preventDefault();
		AppActions.removeVisitor(this.props.visitor._id);
	}

	editVisitor(event){
		event.preventDefault();
		// this is going to make the call to set up the Modal
		this.props.updateVisitor(this.props.visitor);
	}

	render(){
		return(
				<tr>
					<td>{ this.props.visitor.name }</td>
					<td>{ this.props.visitor.email }</td>
					<td><a href="#" onClick={ this.editVisitor }>Edit</a></td>
					<td><a href="#" onClick={ this.removeVisitor }>Delete</a></td>
				</tr>
		);
	}

}

export default Visitor;