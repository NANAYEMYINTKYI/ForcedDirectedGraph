import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { PlayArrow, Pause } from '@mui/icons-material';

//set marks
const marks = [
  { value: 1999, label: '1999' },
  { value: 2023, label: '2023' },
];

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ({ value, onChange, label, width = 300, OnPlayingChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  useEffect (() => {
    if(OnPlayingChange){
      OnPlayingChange(isPlaying);
    }
  }, [isPlaying, OnPlayingChange]);

  useEffect(() => {
    // set playing
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        onChange(null, (prev) => {
          let currentYear = Array.isArray(prev) ? prev[1] : 1999;
          if (currentYear >= 2023) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            // reset to default range after stopping
            return [1999, 2023];
          }

          return [currentYear + 1, currentYear + 1];
        });
      }, 800);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, onChange]);

  const togglePlay = () => {
    if (!isPlaying) {
      // reset to [1999, 1999] before starting
      onChange(null, [1999, 1999]);
    }
    console.log("This is unable isPlaying")
    setIsPlaying((prev) => !prev);
  };

  return (
    <Box sx={{ width, height: '35px', display: 'flex', justifyContent: 'center', gap: 2.5 }}>
      <Slider
        size="small"
        getAriaLabel={() => label}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        min={1999}
        max={2023}
        style={{
          flexGrow: 1,
          height: 5,
        }}
      />
      <Button
        variant="outlined"
        onClick={togglePlay}
        size="small"
        sx={{ minWidth: 40 }}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </Button>
    </Box>
  );
};

export default RangeSlider;