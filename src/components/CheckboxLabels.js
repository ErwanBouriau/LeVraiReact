import React from 'react';
import { connect } from 'react-redux'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { setVisibilityFilter } from '../actions/actions'

class CheckboxLabels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
			checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true
		}	
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
    const value = event.target.value;
    let filter = '';
    switch(value) {
      case "male":
        filter = event.target.checked? 'SHOW_MALE': 'HIDE_MALE';
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
    }
    return setVisibilityFilter(filter);
  };

render() {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox 
            checked={this.state.checkedA} 
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
            checked={this.state.checkedB}
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
            checked={this.state.checkedC}
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
            checked={this.state.checkedD}
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
  checked: 'SHOW_MALE' === state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => dispatch(this.handleChange(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxLabels);

