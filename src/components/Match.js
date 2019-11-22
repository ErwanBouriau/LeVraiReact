import React from 'react';
import Card from './CardComponent';

export default class Match extends React.Component {
    render() {
        const {sexe, profiles, age} = this.props;
        const profile = profiles[0];
        return (
            <Card name={profile.name} />
        )
    }
}