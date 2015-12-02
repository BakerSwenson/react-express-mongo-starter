import React from 'react'

import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'

import Counter from '../../components/Counter'

const App = React.createClass({
  render() {
    return (
        <div>
            <Link to={'about'}>About</Link> | 
            <Link to={'contact'}>Contact</Link> | 
            <Link to={'counter'}>Counter</Link>
            { this.props.children }
        </div>
    )
  }
}) 

const Index = React.createClass({
  render() {
    return (
        <div>
            Hello Index
        </div>
    )
  }
}) 

const About = React.createClass({
  render() {
    return (
        <div>
            Hello About
        </div>
    )
  }
})

const Contact = React.createClass({
  render() {
    return (
        <div>
            Hello Contact
        </div>
    )
  }
}) 

const Error = React.createClass({
  render() {
    return (
        <div>
            Hello Error
        </div>
    )
  }
}) 

React.render((
    <Router>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index }/>
        <Route path="about" component={ About }/>
        <Route path="contact" component={ Contact }/>
        <Route path="counter" component={ Counter }/>
        <Route path="*" component={ Error }/>
      </Route>
    </Router>
), document.querySelector('#main'))

// var App = React.createClass({

//     getInitialState: function () { 
//         return { number: 0 } 
        
//     },
//     render() {
//         return(
//             <div>
//               <h1>clicked {this.state.number} times!</h1>
//               <button onClick={this.handleClick}>click me!</button>
//             </div>
//         )
//     },
//     handleClick: function () {
//         this.setState({ number: this.state.number + 1 })
//     }
// })
// React.render(<App />, document.querySelector('#content'))




