import {Dispatcher} from 'flux'

import assign from 'object-assign'

//AppDispatcher will register to AppStore
let AppDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action // => {actionType, item} from AppActions
    });
  }
});

export default AppDispatcher;