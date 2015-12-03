import React from 'react'

import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'

import Counter from '../../components/Counter'

import Index from '../../components/Index'

import About from '../../components/About'

import Contact from '../../components/Contact'

import Error from '../../components/Error'

class App extends React.Component{
  
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
            <Link to={'/'}>Home</Link> | 
            <Link to={'about'}>About</Link> | 
            <Link to={'contact'}>Contact</Link> | 
            <Link to={'counter'}>Counter</Link>
             { this.props.children }
        </div>
    )
  }
}

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
