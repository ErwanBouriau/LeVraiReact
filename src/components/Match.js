import React from 'react';
import Card from './CardComponent';

export default class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profiles: []};

        this.setProfiles();
      }

    setProfiles () {
		let url = "https://swapi.co/api/people/?page=";

		for (let i = 1; i <= 9; i++) {
			fetch(url + i).then(response => response.json())
				.then(result => {
					this.setState(state => ({profiles: state.profiles.concat(result.results)}))
				})			
		}
    }
    
    render() {
        const {sexe, age} = this.props;

        return (  
            this.state.profiles.map(profile => (
                <Card name={profile.name} localisation={profile.homeworld}/>
              ))
        )
    }

    updateEspeces(filtre) {
        let tabTemp;
        this.profiles.forEach(profile => {
            if (filtre.include(profile.espece)) {
                tabTemp.push(profile)
            }
        });
        this.profiles = tabTemp;
        console.log(this.profiles);     
    }
}