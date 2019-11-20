import React from 'react';
import './App.css';
import CheckboxLabels from './components/CheckboxLabels';
import Match from './components/Match';

class App extends React.Component {

	constructor () {
		this.state = {
			sexe:["homme", "femme", "robot"], 
			age: -1
		}

	}


	return (
	<div className="content">
		<div className="filters">
			<h1>Filtres</h1>
			<CheckboxLabels />
		</div>
		<div className="profiles">
			<Match profiles={personnages} sexe={this.state.sexe} age={this.state.age} />
		</div>
		
	</div>
  );
}

const personnages = [
	{
		name: "Organa",
		first_name: "Leia",
		localisation: "Alderaan"
	},
	{
		name: "Skywalker",
		first_name: "Luke",
		localisation: "Tatoine"
	},
	{
		name: "Solo",
		first_name: "Han",
		localisation: "None"
	},
	{
		name: "",
		first_name: "R2-D2",
		localisation: "Tatoine"
	},
	{
		name: "Vader",
		first_name: "Darth",
		localisation: "Death Star"
	},
]

export default App;
