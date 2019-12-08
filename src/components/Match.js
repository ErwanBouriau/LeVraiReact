import React from 'react';
import Card from './CardComponent';

export default class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profiles: []};
        this.setProfiles();
        console.log(this.state.profiles);
      }

    setProfiles () {
		let url = "https://swapi.co/api/people/?page=";
        console.log("foo");
		for (let i = 1; i <= 9; i++) {
			fetch(url + i).then(response => response.json())
				.then(result => {
					this.setState(state => ({profiles: state.profiles.concat(result.results)}))
                })
                .catch( (error) => console.log(error))			
        }
    }

    updateEspeces(filtre) {
        let tabTemp;
        this.state.profiles.forEach(profile => {
            if (filtre.include(profile.espece)) {
                tabTemp.push(profile)
            }
        });
        this.state.profiles = tabTemp;
        console.log(this.state.profiles);     
    }
    
    render() {
        const {sexe, age} = this.props;

        return (  
            this.state.profiles.map(profile => (
                <Card name={profile.name} localisation={profile.homeworld} gender={profile.gender}/>
              ))
        )
    }
}