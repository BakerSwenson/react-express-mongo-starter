import React from 'react'

import Router from 'react-router'

class About extends React.Component{
	constructor(){
		super();
		//do stuff when the comonent initializes 
	}

	componentWillMount(){
		//do stuff before the component mounts
		this.firstName = "Joe Smith";
	}

	componentDidMount(){
		//do stuff after the component mounts
	}

    render() {
	    return (
	        <div>
	            Hello About, my name is { this.firstName }
	        </div>
	    )
  	}

};

module.exports = About;