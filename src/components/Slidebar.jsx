import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1999,
    label: '1999',
  },
  {
    value: 2023,
    label: '2023',
  },
  {
    value: 2024,
    label: '202021',
  }
];

function valuetext(value) {
  return `${value + 1999}`;
}

const RangeSlider = ({ value, onChange, label, width = 300 }) => {
  return (
    <Box sx={{ width }}>
      <Slider
        getAriaLabel={() => label}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        min={1999}
        max={2024}
      />
    </Box>
  );
};

export default RangeSlider;
