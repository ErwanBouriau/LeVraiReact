import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    switch(name){
      case 'checkedA': return getVisibleUsers(state.users, 'SHOW_MEN')
      case 'checkedB': return getVisibleUsers(state.users, 'SHOW_WOMEN')
    }
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox 
            checked={state.checkedA} 
            onChange={handleChange('checkedA')} 
            value="male" 
            color="primary" 
          />
        }
        label="Mâle"
        
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="female"
            color="primary"
          />
        }
        label="Femelle"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange('checkedC')}
            value="robot"
            color="primary"
          />
        }
        label="Robot"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange('checkedD')}
            value="hermaphrodite"
            color="primary"
          />
        }
        label="Hermaphrodite"
      />       
    </FormGroup>
  );
}

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return users;
    case 'SHOW_MEN':
      return users.filter(u => u.gender === "male");
    case 'SHOW_WOMEN':
      return users.filter(u => u.gender === "female");
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  users: getVisibleUsers(state.users, state.visibilityFilter),
});


export default connect(mapStateToProps, null)(CheckboxLabels);
