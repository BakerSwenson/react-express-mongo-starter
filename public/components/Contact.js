import React from 'react'

import Router from 'react-router'

import AppActions from '../actions/AppActions'

import AppStore from '../stores/AppStore'

import Chance from 'chance'

class Contact extends React.Component{

	constructor(){
		super();

		this._onChange = this._onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			message:"",
			emptyFieldMessage:""

		};
	}

	componentWillMount(){
		//do stuff before the component mounts
		AppStore.removeChangeListener(this._onChange);
	}

	componentDidMount(){
		AppStore.addChangeListener(this._onChange);
	}

	componentWillMount(){
		//do stuff before the component mounts
	}

	handleSubmit(event){
		//check to see if all fields are filled before going through
		if(this.refs.email.getDOMNode().value == ""){
    		this.setState({emptyFieldMessage: "Email cannot be blank"});
    		return;
    	}
    	this.setState({emptyFieldMessage: ""});

		let contactData = {
			email: this.refs.email.getDOMNode().value,
			reason:this.refs.reason.getDOMNode().value,
			message:this.refs.message.getDOMNode().value,
			sendCopy: this.refs.sendCopy.getDOMNode().checked
		}
		AppActions.submitContact(contactData);
	}

	clearPlaceholder(event){
		if(event.type == "click" || (event.type == "keyup" && event.which == 9)){
			event.currentTarget.placeholder = "";
    	}
	}

	_onChange(){
		this.setState({
			message: AppStore.getState().message
		});	
	}

    render() {
	    return (
	        <div>
	            <form className="contact-form">
				  <div className="row">
				    <div className="six columns">
				      <label for="exampleEmailInput">Your email</label>
				      <input className="u-full-width" onClick={this.clearPlaceholder.bind(this)} onKeyUp={this.clearPlaceholder.bind(this)} type="email" ref="email" placeholder={ chance.email() } id="exampleEmailInput" />
				    </div>
				    <div className="six columns">
				      <label for="exampleRecipientInput">Reason for contacting</label>
				      <select className="u-full-width" ref="reason" id="exampleRecipientInput">
				        <option value="questions">Questions</option>
				        <option value="admiration">Admiration</option>
				        <option value="get number">Can I get your number?</option>
				      </select>
				    </div>
				  </div>
				  <label for="exampleMessage">Message</label>
				  <textarea className="u-full-width" ref="message" onClick={this.clearPlaceholder.bind(this)} onKeyUp={this.clearPlaceholder.bind(this)} placeholder="Hi, I had some questions regarding..." id="exampleMessage"></textarea>
				  <label className="example-send-yourself-copy">
				    <input type="checkbox" ref="sendCopy" />
				    <span className="label-body">Send a copy to yourself</span>
				  </label>
				  <input className="button-primary" type="submit" onClick={ this.handleSubmit } value="Submit" />
				</form>
				{ this.state.message ? (<h6 className="notification">{ this.state.message }</h6>) : ''}
				{ this.state.emptyFieldMessage ? (<h6 className="notification">{ this.state.emptyFieldMessage }</h6>) : ''}
	        </div>
	    )
  }

};

export default Contact;