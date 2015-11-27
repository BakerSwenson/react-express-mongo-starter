import React from 'react'

import Router from 'react-router'

//setup a route (to use later)
let { Route, DefaultRoute, NotFoundRoute } = Router

var App = React.createClass({

    getInitialState: function () { 
        return { number: 0 } 
        
    },
    render() {
        return(
            <div>
              <h1>clicked {this.state.number} times!</h1>
              <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    },
    handleClick: function () {
        this.setState({ number: this.state.number + 1 })
    }
})
React.render(<App />, document.querySelector('#content'))