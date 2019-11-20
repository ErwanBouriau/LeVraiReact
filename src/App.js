import React from 'react';
import './App.css';
import CheckboxLabels from './components/CheckboxLabels';
import BoutonMaPlanete from './components/BoutonMaPlanete';
import EspeceListe from './components/EspeceListe';
import AgeSlider from './components/AgeSlider';

function App() {
  	return (
	<div className="content">

		<div className="filters">
			<h1 className="titreF">Filtres</h1>

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
				<EspeceListe />
			</div>

		</div>

		<div className="profiles">
		</div>

	</div>
  );
}

export default App;
