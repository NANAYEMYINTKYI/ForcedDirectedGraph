//--- This is the component of Timeline ---//
// CSS SECTION: Timeline

import { useState, useEffect, useRef } from 'react';
import { Box, Slider, Button} from '@mui/material';
import {CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

// set marks
const marks = [
  { value: 1999, label: '1999' },
  { value: 2023, label: '2023' },
];

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ({ 
  value, 
  onChange, 
  label, 
  width = 300, 
  OnPlayingChange 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect (() => {
    if(OnPlayingChange){
      OnPlayingChange(isPlaying);
    }
  }, [isPlaying, OnPlayingChange]);

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
          return [1999, currentYear + 1];
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
        size = "small"
        getAriaLabel = {() => label}
        value = {value}
        onChange = {onChange}
        valueLabelDisplay = "auto"
        getAriaValueText = {valuetext}
        marks = {marks}
        min = {1999}
        max = {2023}
        style = {{
          flexGrow: 1,
          height: 5,
        }}
      />
      <Button
        variant = "outlined"
        onClick = {togglePlay}
        size = "small"
        sx = {{ minWidth: 40 }}
      >
        {isPlaying ? <b><PauseOutlined /> </b>: <b><CaretRightOutlined /></b>}
      </Button>
    </div>
  );
};

export default RangeSlider;