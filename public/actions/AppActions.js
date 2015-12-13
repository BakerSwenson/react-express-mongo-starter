import AppDispatcher from '../dispatcher/AppDispatcher'

import AppConstants from '../constants/AppConstants'

//list of all of the possible actions that can happen for this AppStore store
//the actions will talk to the AppDispatcher
let AppActions = {
    addItem(item) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },

    getVisitors(visitors) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.GET_VISITORS,
            item: visitors
        });
    },

    removeVisitor(visitor){
    	AppDispatcher.handleViewAction({
            actionType: AppConstants.DELETE_VISITOR,
            item: visitor
        });
    },

    updateVisitor(visitor){
    	AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_VISITOR,
            item: visitor
        });
    },

    clearMessages(message){
    	AppDispatcher.handleViewAction({
            actionType: AppConstants.CLEAR_MESSAGES,
            item: message
        });
    }
};

export default AppActions;