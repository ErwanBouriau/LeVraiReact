import {combineReducers} from 'redux';
import {createStore} from 'redux';

const profiles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return [
        ...state,
        {
          name: action.name,
	        birth_year: action.birth_year,
	        gender: action.gender,
	        homeworld: action.homeworld,
          species: action.species
        },
      ];
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_MALE', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const reducer = combineReducers({
  profiles,
  visibilityFilter,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);