import React from 'react';
import './App.css';
import CheckboxLabels from './components/CheckboxLabels';
import Match from './components/Match';
import BoutonMaPlanete from './components/BoutonMaPlanete';
import EspeceListe from './components/EspeceListe';
import AgeSlider from './components/AgeSlider';



class App extends React.Component {

	constructor(props) {
        super(props)
		this.state = {
			sexe:["homme", "femme", "robot"], 
			age: -1
		}

	}

	handleEspece (e) {
		console.log("foo");
	}

	render() {
	return (
	<div className="content">
		<div className="filters">
			<h1>Filtres</h1>
			
			<div className="maPlanete">
				<BoutonMaPlanete />
			</div>

			<div className="sexe">
				<CheckboxLabels />
			</div>

			<div className="age">
				<AgeSlider />
			</div>

			<div className="espece">
				<EspeceListe onClick={ this.handleEspece } />
			</div>

		</div>
		<div className="profiles">
			<Match profiles={personnages} sexe={this.state.sexe} age={this.state.age} />
		</div>
	</div>
  );
	}
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
