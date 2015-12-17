import React from 'react'

import Router from 'react-router'

import AppActions from '../actions/AppActions'

import AppStore from '../stores/AppStore'

import HeaderSmall from './parts/HeaderSmall'


class Counter extends React.Component{
	
	constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this._onChange = this._onChange.bind(this);
        this.state = {
            number:0,
            message:''
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

    handleClick() {
        //tell the store an item has just been added
        //this AppActions.addItem is completely unnecessary at this point but it demonstrates the flux unidirectional flow
        this.setState({ number: this.state.number + 1 })
        AppActions.addItem(this.state.number);
    }

    _onChange(){
        //this _onChange is completely unnecessary at this point but it demonstrates the flux unidirectional flow
        this.setState( { message: AppStore.getState().message } );
    }

    render() {
        return(
            <div>
                <br />
                <HeaderSmall />
                <h3>added {this.state.number} visitors!</h3>
                <button className="button-primary" onClick={ this.handleClick }>add visitor!</button>
                <p>{ this.state.message }</p>
            </div>
        )
    }
};

export default Counter;