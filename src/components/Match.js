import React from 'react';
import Card from './CardComponent';

export default class Match extends React.Component {
    render() {
        const {sexe, profiles, age} = this.props;
        // const profile = profiles[0];

        return (  
            profiles.map(profile => (
                <Card first_name={profile.first_name} name={profile.name} localisation={profile.localisation}/>
              ))
            //   <Card first_name={profile.first_name} name={profile.name} localisation={profile.localisation}/>
        )
    }
}