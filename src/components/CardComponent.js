import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';

import male from "../profil-male.jpeg"
import female from "../profil-female.jpg"
import robot from "../profil-robot.png"
import herma from "../profil-herma.png"

export default class RecipeReviewCard extends React.Component {

    constructor(props) {
        super(props);
        this.setLocalisation(this.props.localisation);
        this.state = {vraiLoc: null}
    }

    setLocalisation(localisation) {
        fetch(localisation)
            .then(response => response.json())
            .then(result => this.setState({vraiLoc: result.name}))
            .catch( error => {console.log(error); })   
    }

    render() {
    const styles = {
        card: {
          width: 345,
          height: 500,
          margin: 15,
        },
        photo: {
            height: "80%",
          },
      };


    const {name, localisation, gender} = this.props;
 
    let imgSrc;
    switch(gender) {
        case "male":
            imgSrc = male
            break;
        case "female":
            imgSrc = female
            break;
        case "n/a":
            imgSrc = robot
            break;
        case "none":
            imgSrc = robot
            break;
        case "hermaphrodite":
            imgSrc = herma
            break;
    }

    return (
        <Card style={styles.card}>
        <CardMedia style={styles.photo} image={imgSrc}/>
        <CardContent>
            <Typography variant="h5" color="textSecondary" component="p" data-testid="name">
                {name || ""} 
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
            <RoomIcon /> {this.state.vraiLoc}
            </Typography>
        </CardContent>
    </Card>
    )
    }
}
    