import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Humain',
  'Limace',
  'Ewok',
  'Wookie'
];

export default class MultipleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected: []};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    
    let difference = names.filter(x => !event.target.value.includes(x))[0];
    let tabTemp = this.state.selected;

    if (this.state.selected.includes(difference)) {
      const index = tabTemp.indexOf(difference);
      tabTemp.splice(index,1);
    }
    else {
      tabTemp.push(difference);
    }
    this.setState({selected: tabTemp});
    console.log(this.state.selected);
    this.props.matcher.updateEspeces(this.state.selected);
    
  }; 

  render() {
    //const classes = useStyles();

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={names}
          onChange={this.handleChange}
          input={<Input />}
          renderValue={selected => {
            return (
              <div>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )
          }}
          MenuProps={MenuProps}
        >
          {names.map((name, index) => (
            <MenuItem key={name} value={name}>
              <Checkbox />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
  }
}
