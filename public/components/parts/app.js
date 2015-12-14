import React from 'react'

import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'

import Counter from '../../components/Counter'

import Index from '../../components/Index'

import About from '../../components/About'

import Contact from '../../components/Contact'

import Visitors from '../../components/Visitors'

import Error from '../../components/Error'

import AppActions from '../../actions/AppActions'

import AppStore from '../../stores/AppStore'

class App extends React.Component{
  
  constructor(){
    super();

    this._onChange = this._onChange.bind(this);

    this.state = {
      currentVisitorAdded: null
    }
  }
  
  componentWillMount(){
    //do stuff before the component mounts
  }

  componentWillUnount(){
      //do stuff before the component mounts
      //remove listeners to the store
      AppStore.removeChangeListener(this._onChange);
  }

  componentDidMount(){
    //do stuff after the component mounts
    //add listeners to the store
    AppStore.addChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      currentVisitorAdded: AppStore.getState().currentVisitorAdded
    }); 
  }

  render() {
    return (
        <div>
          <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item"><Link to={'/'}>HOME</Link></li>
                <li className="navbar-item"><Link to={'about'}>ABOUT</Link></li>
                <li className="navbar-item"><Link to={'contact'}>CONTACT</Link></li>
                <li className="navbar-item"><Link to={'counter'}>COUNTER</Link></li>
                <li className="navbar-item">
                <Link to={'visitors'}>VISITORS 
                { this.state.currentVisitorAdded ? (
                <span className="fa-stack notification-container">
                  <i className="fa fa-circle fa-stack notification"></i>
                  <strong className="fa-stack-1x notification-num">{this.state.currentVisitorAdded}</strong>
                </span>
                ) : ''}
                  
                </Link></li>
              </ul>
          </nav>
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
        <Route path="visitors" component={ Visitors }/>
        <Route path="*" component={ Error }/>
      </Route>
    </Router>
), document.querySelector('#main'))
