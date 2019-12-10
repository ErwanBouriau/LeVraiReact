import {combineReducers} from 'redux';
import {createStore} from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          espece: action.espece,
        },
      ];

    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_MEN', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }
  };
  
  const reducer = combineReducers({
    users,
    visibilityFilter,
  });

export default createStore(
  reducer,
);