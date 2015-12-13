import AppDispatcher from '../dispatcher/AppDispatcher'

import EventEmitter from 'events'

import assign from 'object-assign'

import AppConstants from '../constants/AppConstants'

import $ from 'jquery'

import Chance from 'chance'

const API_URL = '/api/visitors';

const API_SINGLE_URL = '/api/visitor';

//AppDispatcher will tell the store what to call based on what was dispatched
AppDispatcher.register(function(payload){
  
  switch(payload.action.actionType){

  	case AppConstants.ADD_ITEM:
	  	AppStore.addItem(payload.action.item);
	  	break;

	case AppConstants.GET_VISITORS:
	  	AppStore.getVisitors(payload.action.item)
	  	break;

	case AppConstants.DELETE_VISITOR:
	  	AppStore.removeVisitor(payload.action.item)
	  	break;

	case AppConstants.UPDATE_VISITOR:
	  	AppStore.updateVisitor(payload.action.item)
	  	break;
  }

  return true;

});

//refresh state of visitors
let _visitors = {
	visitors: [],
	message:""
};

let chance = new Chance();

let AppStore = assign({}, EventEmitter.prototype, {
	
	getState() {
		return _visitors;
	},

	emitChange() {
		this.emit(AppConstants.CHANGE_EVENT);
	},

	//the view will be listening for this and waiting for a callback
	addChangeListener(callback) {
		this.on(AppConstants.CHANGE_EVENT, callback);
	},
	//the view will be listening for this and waiting for a callback
	removeChangeListener(callback) {
		this.removeListener(AppConstants.CHANGE_EVENT, callback);
	},

	addItem(item){

		//make the ajax request and update Mongo (or any other database)
		$.ajax({ type: 'POST', url: API_URL, data: { name: chance.first(), email: chance.email()} })
			.done((data) => {
				_visitors.message = data.message;
				//emitChange to notify the view so that the view can make the updates
				AppStore.emitChange(AppConstants.CHANGE_EVENT);
			})

			.fail((jqXhr) => {
				//error here
				// console.log("fail", jqXhr);
			})

			.always((jqXhr) => {
				//this will always be ran if there is an error or not
				console.log("visitor added", jqXhr);
			});
	},

	getVisitors(item){
		$.ajax({type: 'GET', url: API_URL})
			.done((data) => {
				_visitors.visitors = data;
				AppStore.emitChange(AppConstants.CHANGE_EVENT);
			})

			.fail((jqXhr) => {
				// console.log("fail", jqXhr);
			})

			.always((jqXhr) => {
				// console.log("always", jqXhr);
			})
	},

	removeVisitor(item){
		//make the ajax request and update Mongo (or any other database)
		$.ajax({ type: 'DELETE', url: API_SINGLE_URL + "/" + item, dataType:'json' })
			.done((data) => {
				AppStore.getVisitors(null);
				_visitors.message = data.message;
				AppStore.emitChange(AppConstants.CHANGE_EVENT);
			})

			.fail((jqXhr) => {
				//error here
				// console.log("fail", jqXhr);
			})

			.always((jqXhr) => {
				//this will always be ran if there is an error or not
				console.log("visitor deleted", jqXhr);
			});
	},

	updateVisitor(item){
		//make the ajax request and update Mongo (or any other database)
		$.ajax({ type: 'PATCH', url: API_SINGLE_URL + "/" + item.id, data:item })
			.done((data) => {
				_visitors.message = data.message;
				AppStore.getVisitors(null);
				// AppStore.emitChange(AppConstants.CHANGE_EVENT);
			})

			.fail((jqXhr) => {
				//error here
				// console.log("fail", jqXhr);
			})

			.always((jqXhr) => {
				//this will always be ran if there is an error or not
				console.log("visitor edited", jqXhr);
			});
	}

});

export default AppStore;