import React from 'react'

import Router from 'react-router'

class Index extends React.Component{
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
	            Hello Index!
	        </div>
	    )
  	}

};

module.exports = Index;