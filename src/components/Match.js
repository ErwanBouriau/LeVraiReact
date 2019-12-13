import React from 'react';
import Card from './CardComponent';
import { connect } from 'react-redux'

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profiles: []};
        //this.setProfiles();
        console.log(this.state.profiles);
      }

    static defaultProps = {
      profiles: [
        {
          name: 'John Doe',
          gender: 'male',
          homeworld: "https://swapi.co/api/planets/1/"
        },
      ],
    };
    
    render() {
        const {sexe, age} = this.props;    
        return (  
        this.props.profiles.map((prof, index) => (
                <Card key={index} name={prof.name} localisation={prof.homeworld} gender={prof.gender}/>
        ))       
        )
    }
}

const getVisibleUsers = (profiles, filter) => {
    switch (filter) {
      case 'SHOW_ALL':      
        return profiles;
      case 'SHOW_MALE':
        return profiles.filter(p => p.gender === "male");
      case 'SHOW_FEMALE':
        return profiles.filter(p => p.gender === "female");
      case 'SHOW_ROBOT':
        return profiles.filter(p => p.gender === "n/a" || "none");
      case 'SHOW_HERMA':
          return profiles.filter(p => p.gender === "hermaphrodite");
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  };

const mapStateToProps = state => ({
    profiles: getVisibleUsers(state.profiles, state.visibilityFilter),
});

export default connect(mapStateToProps, null)(Match);