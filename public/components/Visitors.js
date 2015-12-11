import React from 'react'

import Router from 'react-router'

import Visitor from './parts/Visitor'

import AppActions from '../actions/AppActions'

import AppStore from '../stores/AppStore'

class Visitors extends React.Component{

	constructor(){
		super();
		this._onChange = this._onChange.bind(this);
		this.state = {
			visitors: {}
		}
		this.getVisitors();
	}

	componentWillMount(){
		//do stuff before the component mounts
	}

	componentWillUnmount(){
		AppStore.removeChangeListener(this._onChange);
	}

	componentDidMount(){
		//do stuff after the component mounts
		AppStore.addChangeListener(this._onChange);
	}

	renderVisitors(){
		//if there are no visitors, don't bother
		if(Object.keys(this.state.visitors).length == 0) return;

		// return each visitor from the Collection (DB)
		return this.state.visitors.map((visitor) => {
			//for each Visitor, render a Visitor component and pass the id and visitor
			return <Visitor key={ visitor._id } visitor={ visitor } />
		})
	}

	getVisitors(){
		//since we're getting data, we don't have to pass an argument, but this is for show
		AppActions.getVisitors('get visitors');
	}

	_onChange(){
		//once the onChange has fired from the store, we can set the new state
		this.setState({visitors: AppStore.getState().visitors})
	}

    render() {
	    return (
	        <div>
	            Current visitors: { (Object.keys(this.state.visitors).length) ?  Object.keys(this.state.visitors).length : "0" }
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
	        </div>
	    )
  }

};

export default Visitors;
