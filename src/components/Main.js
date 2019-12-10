import React from 'react';
import CheckboxLabels from './CheckboxLabels';
import Match from './Match';
import EspeceListe from './EspeceListe';
import AgeSlider from './AgeSlider';

class Main extends React.Component {

	constructor(props) {
        super(props)
		this.state = {
			sexe:["homme", "femme", "robot"], 
			age: -1,
		}	
	}

	render() {
	const matcher = <Match profiles={this.state.personnages} sexe={this.state.sexe} age={this.state.age} />
	return (
	 
	<div className="content">
		<div className="menu">
			<h1 className="titreF" data-testid="filter-title">Filtres</h1>
			
			<div className="filters">
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
					<EspeceListe className="espece" matcher={matcher}/>
				</div>
			</div>

		</div>
		<div className="profiles">
			{matcher}
		</div>
	</div>
  );

	}
}

export default Main;
