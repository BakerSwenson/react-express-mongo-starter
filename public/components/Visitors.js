import React from 'react'

import Router from 'react-router'

import Visitor from './parts/Visitor'

import AppActions from '../actions/AppActions'

import AppStore from '../stores/AppStore'

import Modal from 'react-awesome-modal'

class Visitors extends React.Component{
	
	constructor(){
		super();
		this._onChange = this._onChange.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateModal = this.updateModal.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.clearFormFields = this.clearFormFields.bind(this);
		
		this.state = {
			visitors: {},
			visible: false,
			singleVisitor: {},
			message: '',
			emptyFieldMessage:''
		}
		this.getVisitors();
	}

	componentWillMount(){
		//do stuff before the component mounts
	}

	componentWillUnmount(){
		//do stuff before the component is removed
		AppActions.clearMessages();
		AppStore.removeChangeListener(this._onChange);
	}

	componentDidMount(){
		//do stuff after the component mounts
		AppStore.addChangeListener(this._onChange);
	}

	handleClick(){
		console.log("Visitor Clicked");
	}

	renderVisitors(){
		//if there are no visitors, don't bother
		if(Object.keys(this.state.visitors).length == 0) return;

		// return each visitor from the Collection (DB)
		return this.state.visitors.map((visitor) => {
			//for each Visitor, render a Visitor component and pass the id and visitor
			return <Visitor key={ visitor._id } visitor={ visitor } updateVisitor={this.handleUpdate} />
		})
	}

	getVisitors(){
		//since we're getting data, we don't have to pass an argument, but this is for show
		AppActions.getVisitors('get visitors');
	}

	handleUpdate(item){
		//load the Modal window after the singleVisitor has been set
		this.setState({
            singleVisitor : item
        }, function(){

        	this.openModal();
        });
	}

	openModal() {
        
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false,
            singleVisitor:{},
            emptyFieldMessage:''
        });
        this.clearFormFields();
    }

    updateModal() {
    	if(this.refs.visitorName.getDOMNode().value == "" || this.refs.visitorEmail.getDOMNode().value == ""){
    		this.setState({emptyFieldMessage: "Fields cannot be blank"});
    		return;
    	}

    	let updateData = {
    		id: this.state.singleVisitor._id,
    		name: this.refs.visitorName.getDOMNode().value,
    		email: this.refs.visitorEmail.getDOMNode().value
    	}
    	
        AppActions.updateVisitor(updateData);
    }

    clearField(event){
    	if(event.type == "click" || (event.type == "keyup" && event.which == 9)){
			event.currentTarget.placeholder = "";
    	}
    }

    clearFormFields(){
		this.refs.visitorName.getDOMNode().value = "";
		this.refs.visitorEmail.getDOMNode().value = "";
    }

	_onChange(){
		//once the onChange has fired from the store, we can set the new state
		this.state.visible ? this.closeModal() : null;
		this.setState({
			visitors: AppStore.getState().visitors,
			message: AppStore.getState().message
		});	

		this.clearFormFields();
	}

    render() {
	    return (
	        <div>
	        	<br />
	            Current visitors: { (Object.keys(this.state.visitors).length) ?  Object.keys(this.state.visitors).length : "0" }
	            <h6 className="updated">{ this.state.message }</h6>
	            <table class="u-full-width">
		            <thead>
					    <tr>
					      <th>Name</th>
					      <th>Email</th>
					      <th>&nbsp;</th>
					      <th>&nbsp;</th>
					    </tr>
					</thead>
					<tbody>
						{ this.renderVisitors() }
					</tbody>
	            </table>
	            <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp">
                    <div className="edit-form">
                        <input type="text" className="edit-name" ref="visitorName" onClick={this.clearField.bind(this)} onKeyUp={this.clearField.bind(this)} placeholder={ this.state.singleVisitor.name } required />
                        <input type="text" className="edit-name" ref="visitorEmail" onClick={this.clearField.bind(this)} onKeyUp={this.clearField.bind(this)} placeholder={ this.state.singleVisitor.email } required/>
                        <input type="button" value="Save" href="javascript:void(0);" className="button-primary save-btn" onClick={this.updateModal.bind(this)} />
                        <input type="button" value="Cancel" href="javascript:void(0);" onClick={this.closeModal.bind(this)} />
                        <h6 className="empty-field">{this.state.emptyFieldMessage}</h6>
                    </div>
                </Modal>
	        </div>
	    )
	}
};

export default Visitors;
