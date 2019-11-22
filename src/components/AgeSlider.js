import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 20,
    },
    {
      value: 40,
    },
    {
      value: 60,
    },
    {
      value: 80,
    },
  ];

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
