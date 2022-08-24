import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const FilterBar = ({ value, rangeSelector }) => {



    return (
        <div style={{
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
            <br />
            <Slider
                style={{ backgroundColor: "#eff0f2", color: "#2d433c" }}
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