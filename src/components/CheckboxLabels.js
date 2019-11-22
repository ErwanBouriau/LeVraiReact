import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox 
            checked={state.checkedA} 
            onChange={handleChange('checkedA')} 
            value="checkedA" 
            color="default" 
          />
        }
        label="Mâle"
        
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="default"
          />
        }
        label="Femelle"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange('checkedC')}
            value="checkedC"
            color="default"
          />
        }
        label="Robot"
      />       
    </FormGroup>
  );
}

