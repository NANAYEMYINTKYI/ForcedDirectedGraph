//--- This is the component of Timeline ---//
// CSS SECTION: Timeline

import { useState, useEffect, useRef } from 'react';
import { Box, Slider, Button} from '@mui/material';
import {CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

// set marks
// const marks = [
//   { value: 1999, label: '1999' },
//   { value: 2023, label: '2023' },
// ];
// const marks = [];

// for (let year = 1999; year <= 2023; year += 1) {
//   marks.push({
//     value: year,
//     label: String(year),
//   });
// }


function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ({ 
  value, 
  setIsPlaying,
  isPlaying,
  onChange, 
  label, 
  width = 500, 
  // OnPlayingChange 
}) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect (() => {
    if(isPlaying){
      setIsPlaying(isPlaying);
    }
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    if (isPlaying) {
      // set playing
      intervalRef.current = setInterval(() => {
        onChange(null, (prev) => {
          let currentYear = Array.isArray(prev) ? prev[1] : 1999;
          if (currentYear >= 2023) {
            // after reaching 2023, stop playing
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            return [1999, 2023];
          }
          // set next year
          return [currentYear + 1, currentYear + 1];
        });
      }, 800);
    } else {
      // set not playing
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, onChange]);

  const togglePlay = () => {
    if (!isPlaying) {
      // reset to [1999, 1999] before starting
      onChange(null, [1999, 1999]);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div 
      className = "timeline-container"
      style = {{ width }}
    >
      <Slider
        className = "year-slider"
        size = "medium"
        getAriaLabel = {() => label}
        value = {value}
        onChange = {onChange}
        valueLabelDisplay = "on"
        getAriaValueText = {valuetext}
        // marks = {marks}
        marks 
        min = {1999}
        max = {2023}
        style = {{
          flexGrow: 1,
          height: 5,
        }}
      />
      <Button
        className = "play-button"
        variant = "outlined"
        onClick = {togglePlay}
        size = "medium"
      >
        {isPlaying ? <h3><b><PauseOutlined /> </b></h3>: <h3><b><CaretRightOutlined /></b></h3>}
      </Button>
    </div>
  );
};

export default RangeSlider;