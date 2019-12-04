import React from 'react';
import './App.css';
import CheckboxLabels from './components/CheckboxLabels';
import Match from './components/Match';
import Bouton from './components/Bouton';
import EspeceListe from './components/EspeceListe';
import AgeSlider from './components/AgeSlider';


const personnages = [];

class App extends React.Component {

	constructor(props) {
        super(props)
		this.state = {
			sexe:["homme", "femme", "robot"], 
			age: -1,
		}
	}

	render() {
	return (
	<div className="content">
		<div className="menu">
			<h1 className="titreF">Filtres</h1>
			
			<div className="filters">
				<div className="filtersItem">
					<Bouton className="maPlanete" label="ma planète"/>
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
					<EspeceListe className="espece"/>
				</div>
			</div>

		</div>
		<div className="profiles">
		<Match profiles={this.state.personnages} sexe={this.state.sexe} age={this.state.age} />
		</div>
	</div>
  );

	}
}

export default App;
