import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function PumpButton() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.pump1} onChange={handleChange} name="pump1" />
          }
          label="Pompa 1"
        />
        <FormControlLabel
          control={
            <Switch checked={state.pump2} onChange={handleChange} name="pump2" />
          }
          label="Pompa 2"
        />
        <FormControlLabel
          control={
            <Switch checked={state.pump3} onChange={handleChange} name="pump3" />
          }
          label="Pompa 3"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}
