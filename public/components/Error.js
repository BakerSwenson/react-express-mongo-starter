import React from 'react'

import Router from 'react-router'

class Error extends React.Component{

    constructor(){
    	super();

    }

    componentWillMount(){
		//do stuff before the component mounts
	}

	componentDidMount(){
		//do stuff after the component mounts
	}

    render() {
	    return (
	        <div>
	            Sorry, this route was not found.
	        </div>
	    )
  }
};

module.exports = Error;