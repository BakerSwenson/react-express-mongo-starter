import React from 'react'

import Router from 'react-router'

class Counter extends React.Component{
	
	constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            number:0
        }
    }

    componentWillMount(){
        //do stuff before the component mounts
    }

    componentDidMount(){
        //do stuff after the component mounts
    }

    handleClick() {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        return(
            <div>
              <h1>clicked {this.state.number} times!</h1>
              <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    }
};

module.exports = Counter;