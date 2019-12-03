import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
}));

export default class Bouton extends React.Component {
  render() {
      const {label} = this.props;

      return (  
        <Button variant="outlined">
          {label}
        </Button>
      )
  }
}
