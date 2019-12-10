import {combineReducers} from 'redux';
import {createStore} from 'redux';

const visibilityFilter = (state = 'SHOW_MALE', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const reducer = combineReducers({
  visibilityFilter,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);