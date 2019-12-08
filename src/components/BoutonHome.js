import React from 'react';
import '../Bouton.css'

export default class Bouton extends React.Component {

  handleClick() {
    this.props.history.push('/main')
  }

  render() {
      const {label} = this.props;

      return (  
        <button onClick={() => {this.handleClick()}}>{label}</button>
      )
  }
}
