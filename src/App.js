import React from 'react';
import './App.css';
import RouterApp from "./components/Router.js";
import {connect} from 'react-redux';
import { addProfile, fetchProfiles } from './actions/actions';

class App extends React.Component {
	componentDidMount() {
        fetchProfiles(json => {
          json.results.forEach(profile =>{
            this.props.addProfile({
              name: profile.name,
              birth_year: profile.birth_year,
              gender: profile.gender,
              homeworld: profile.homeworld,
              species: profile.species
            });}
          );
        });
      }

	render() {
		return (
			<div className="App">
				<RouterApp/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addProfile: name => dispatch(addProfile(name)),
  });

  export default connect(null, mapDispatchToProps)(App);
