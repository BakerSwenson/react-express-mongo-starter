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
				<br />
				<p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p> 

				-<a href="http://slipsum.com">Samuel L. Ipsum</a>
			</div>
	    )
  	}

};

module.exports = About;