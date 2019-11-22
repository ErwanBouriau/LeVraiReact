import React from 'react';
import './App.css';
import CheckboxLabels from './components/CheckboxLabels';
import Match from './components/Match';
import BoutonMaPlanete from './components/BoutonMaPlanete';
import EspeceListe from './components/EspeceListe';
import AgeSlider from './components/AgeSlider';
import BoutonValider from './components/BoutonValider';



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
		<div className="menu">
			<h1 className="titreF">Filtres</h1>
			
			<div className="filters">
				<div className="filtersItem">
					<BoutonMaPlanete className="maPlanete"/>
				</div>
				<h3>Sexe</h3>
				<div className="filtersItem">
					<CheckboxLabels className="sexe"/>
				</div>
				<h3>Âge</h3>
				<div className="filtersItem">
					<AgeSlider className="age"/>
				</div>
				<h3>Espèces</h3>
				<div className="filtersItem">
					<EspeceListe className="espece" onClick={ this.handleEspece } />
				</div>
			</div>

			<div className="valider">
				<BoutonValider />
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
