import React from 'react';
import { BarChart, LineChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Box } from '@mui/material';
import { SeriesMetric } from './SettingChart';

interface WorkoutRecord {
  id: number;
  date: string;
  workout: string;
  time: number;
  calories: number;
  pulse: number;
}

type Props = {
  data: WorkoutRecord[];
  metric: SeriesMetric;
  isBar: boolean;
};

const ChartView: React.FC<Props> = ({ data, metric, isBar }) => {
  const xData = data.map(r => r.date);
  const yData = data.map(r => r[metric]);

  const labelMap: Record<SeriesMetric, string> = {
    time: 'Время (мин)',
    calories: 'Калории',
    pulse: 'Пульс'
  };

  const legendPosition = { vertical: 'bottom', horizontal: 'center' } as const;

  const chartProps = {
    xAxis: [{ data: xData, scaleType: 'band' as const }],
    series: [{ data: yData, label: labelMap[metric] }],
    yAxis: [{ label: labelMap[metric] }],
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)'
      }
    },
    slotProps: { legend: { position: legendPosition } }
  };

  return (
    <Box sx={{ height: 400, width: '100%', mb: 4 }}>
      {isBar ? <BarChart {...chartProps} /> : <LineChart {...chartProps} />}
    </Box>
  );
};

export default ChartView;
