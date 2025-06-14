import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Stack,
  Divider
} from '@mui/material';

export type SeriesMetric = 'time' | 'calories' | 'pulse';

type Props = {
  metric: SeriesMetric;
  setMetric: React.Dispatch<React.SetStateAction<SeriesMetric>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingChart: React.FC<Props> = ({ metric, setMetric, isBar, setIsBar }) => (
  <Stack
    direction="row"
    spacing={4}
    divider={<Divider orientation="vertical" flexItem />}
    sx={{ mb: 2 }}
    justifyContent="center"
  >
    <FormControl component="fieldset">
      <FormLabel component="legend">Метрика</FormLabel>
      <RadioGroup row value={metric} onChange={e => setMetric(e.target.value as SeriesMetric)}>
        <FormControlLabel value="time" control={<Radio />} label="Время" />
        <FormControlLabel value="calories" control={<Radio />} label="Калории" />
        <FormControlLabel value="pulse" control={<Radio />} label="Пульс" />
      </RadioGroup>
    </FormControl>

    <FormControl component="fieldset">
      <FormLabel component="legend">Тип графика</FormLabel>
      <RadioGroup row value={isBar ? 'bar' : 'line'} onChange={e => setIsBar(e.target.value === 'bar')}>
        <FormControlLabel value="bar" control={<Radio />} label="Столбцы" />
        <FormControlLabel value="line" control={<Radio />} label="Линия" />
      </RadioGroup>
    </FormControl>
  </Stack>
);

export default SettingChart;
