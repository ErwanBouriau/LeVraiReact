import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: 15,
    backgroundColor: grey[100]
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default class RecipeReviewCard extends React.Component {

render() {
    //const classes = useStyles();


    const {name, first_name, localisation} = this.props;
    return (
        <Card>
        <CardMedia />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {first_name} {name || ""} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {localisation}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
    )
}
}
    