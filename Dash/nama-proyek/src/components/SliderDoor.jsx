import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderDoor() {
  return (
    <Box sx={{ width: 800 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}