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

// let names = [
//   //'Humain','Limace','Ewok','Wookie'
// ];

// for(let j=1; j<4; j++){
//   let url = "https://swapi.co/api/species/?page=" + j;
//   for(let i=0; i <10; i++){
//     fetch(url).then(response => response.json())
//       .then(result=> names.push(result.results[i].name))
//   }
// }
// for(let i=0; i<7; i++){
//   fetch("https://swapi.co/api/species/?page=4").then(response => response.json())
//       .then(result=> {names.push(result.results[i].name)
//       })
// }




export default class MultipleSelect extends React.Component {

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
          for(let i=0; i<result.results.length; i++){
            this.setState(state => ({especes: state.especes.push(result.results[i])}))
        }
				})			
    } 
  }
  
  handleChange (event) {
    
    let difference = this.state.especes.filter(x => !event.target.value.includes(x))[0];
    let tabTempEspeces = this.state.selected;
    let tabTempProfiles = [];

    if (this.state.selected.includes(difference)) {
      const index = tabTempEspeces.indexOf(difference);
      tabTempEspeces.splice(index,1);
    }
    else {
      tabTempEspeces.push(difference);
    }
    this.setState({selected: tabTempEspeces});
    console.log("filtre =>", this.state.selected);
    
    this.props.matcher.updateEspeces(this.state.selected);

    // // TEST
    // this.props.matcher.props.profiles.forEach(profile => {
    //   if (this.state.selected.includes(profile.espece)) {
    //       tabTempProfiles.push(profile)
    //   }
    // });
    // this.props.matcher.setState(tabTempProfiles);
    // console.log(tabTempProfiles);
    

  }

  render() {
    //const classes = useStyles();
    
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
          {this.state.especes.map((espece, index) => (
            <MenuItem key={espece.name} value={espece.name}>
              <Checkbox checked={this.state.selected.indexOf(espece.name) > -1} />
              <ListItemText primary={espece.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
  }
}
