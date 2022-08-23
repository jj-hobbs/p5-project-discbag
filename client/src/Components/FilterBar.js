import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
  
const FilterBar = ({value, rangeSelector}) => {
  
  
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <br /> 
      <Slider
        style={{backgroundColor:"#a3b18a", color: "#3a5a40"}}
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="on"
        step={1}
        marks
        min={1}
        max={15}
      />
      <Typography id="range-slider" gutterBottom>
        Select Disc Speed Range
      </Typography>
    </div>
  );
}
  
export default FilterBar;