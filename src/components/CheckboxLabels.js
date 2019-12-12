import React from 'react';
import { connect } from 'react-redux'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { setVisibilityFilter } from '../actions/actions'

class CheckboxLabels extends React.Component {

  handleChange = name => event => {
    
    const value = event.target.value;
    let filter = '';   
    switch(value) {
      case "male":
        filter = event.target.checked? 'SHOW_MALE': 'SHOW_FEMALE';
        break;
      case "female":
        filter = event.target.checked? 'SHOW_FEMALE': 'HIDE_FEMALE';
        break;
      case "robot":
        filter = event.target.checked? 'SHOW_ROBOT': 'HIDE_ROBOT';
        break;
      case "hermaphrodite":
        filter = event.target.checked? 'SHOW_HERMA': 'HIDE_HERMA';
        break;
      default:
        break;
    }
    console.log(filter);
        
    return setVisibilityFilter(filter);
  };

render() {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox 
            checked={this.props.checkedA}
            onChange={this.handleChange('checkedA')} 
            value="male" 
            color="primary" 
          />
        }
        label="Mâle"
        
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.props.checkedB}
            onChange={this.handleChange('checkedB')}
            value="female"
            color="primary"
          />
        }
        label="Femelle"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.props.checkedC}
            onChange={this.handleChange('checkedC')}
            value="robot"
            color="primary"
          />
        }
        label="Robot"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.props.checkedD}
            onChange={this.handleChange('checkedD')}
            value="hermaphrodite"
            color="primary"
          />
        }
        label="Hermaphrodite"
      />       
    </FormGroup>
  );
}
}

const mapStateToProps = state => ({
  checkedA: 'SHOW_MALE' === state.visibilityFilter,
  checkedB: 'SHOW_FEMALE' === state.visibilityFilter,
  checkedC: 'SHOW_ROBOT' === state.visibilityFilter,
  checkedD: 'SHOW_HERMA' === state.visibilityFilter
})


const mapDispatchToProps = dispatch => ({
  handleChange: (e) => dispatch(this.handleChange(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxLabels);

