import React from 'react';
import './App.css';
import RouterApp from "./components/Router.js";
import {addUser} from './components/actions';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<RouterApp/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addUser: id => dispatch(addUser(id)),
  });
  
export default connect(null, mapDispatchToProps)(App);