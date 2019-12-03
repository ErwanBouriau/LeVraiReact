import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';

export default class RecipeReviewCard extends React.Component {

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

    const {name, localisation} = this.props;
    return (
        <Card style={styles.card}>
        <CardMedia style={styles.photo} image={require ("../profil-male.jpeg")}/>
        <CardContent>
            <Typography variant="h5" color="textSecondary" component="p">
                {name || ""} 
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
            <RoomIcon /> {localisation}
            </Typography>
        </CardContent>
    </Card>
    )
}
}
    