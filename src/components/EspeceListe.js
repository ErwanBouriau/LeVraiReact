import React from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux'

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

class EspeceListe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected: [],especes:[]};
    this.handleChange = this.handleChange.bind(this);

    this.initSelect();
  }

  initSelect(){
    let url = "https://swapi.co/api/species/?page=";

    for (let i = 1; i <= 4; i++) {
			fetch(url + i).then(response => response.json())
				.then(result => { 
          const especes = this.state.especes;
          for(let i=0; i<result.results.length; i++){
            const name = result.results[i].name;
            especes.push(name);
          }
          this.setState({especes: especes.sort()})
        })	
    }
  }

  handleChange (event) {
    
    let difference = this.state.especes.filter(x => !event.target.value.includes(x))[0];
    let tabTempEspeces = this.state.selected;

    if (this.state.selected.includes(difference)) {
      const index = tabTempEspeces.indexOf(difference);
      tabTempEspeces.splice(index,1);
    }
    else {
      tabTempEspeces.push(difference);
    }
    this.setState({selected: tabTempEspeces});
    
    this.props.matcher.updateEspeces(this.state.selected);

  }

  render() {

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={this.state.especes}
          onChange={this.handleChange}
          input={<Input />}
          renderValue={selected => {           
            return (
              <div>
                {this.state.selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )
          }}
          MenuProps={MenuProps}
        >
          {this.state.especes.map(espece => (
            <MenuItem key={espece} value={espece}>
              <Checkbox checked={this.state.selected.indexOf(espece) > -1}/>
              <ListItemText primary={espece} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
  }
}
const mapStateToProps = (state) => {
  return {
    favoritesEspeces: state.favoritesEspeces
  }
}

export default connect(mapStateToProps)(EspeceListe)
