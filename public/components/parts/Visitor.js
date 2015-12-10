import React from 'react'

class Visitor extends React.Component {
	//receive all proptypes that are passed from Visitors component
	propTypes: {
		visitor: React.PropTypes.object.isRequired,
	}

	render(){
		return(
			<li>{ this.props.visitor.name }  { this.props.visitor.email }</li>
		);
	}

}

export default Visitor;