import React, { useState, useMemo } from 'react';
import NavBar from '../components/NavBar';
import { Container, Typography } from '@mui/material';
import { GridFilterModel, GridSortModel } from '@mui/x-data-grid';
import data from '../data';
import SettingChart from './components/SettingChart';
import ChartView from './components/ChartView';
import TableView from './components/TableView';

interface WorkoutRecord {
  id: number;
  date: string;
  workout: string;
  time: number;
  calories: number;
  pulse: number;
}

type SeriesMetric = 'time' | 'calories' | 'pulse';

const Chart: React.FC = () => {
  const records = data as WorkoutRecord[];

  // Состояния фильтра и сортировки таблицы
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  // Состояния метрики и типа графика
  const [metric, setMetric] = useState<SeriesMetric>('time');
  const [isBar, setIsBar] = useState(true);

  // Применяем фильтрацию и сортировку к данным
  const processed = useMemo(() => {
    let res = records.filter(r =>
      filterModel.items.every(item => {
        // если фильтр пустой — пропускаем
        if (item.value == null || item.value === '') {
          return true;
        }
        const field = item.field as keyof WorkoutRecord;
        const op = item.operator;          // <-- используем item.operator
        const raw = item.value;
        const cell = r[field];

        // Числовая логика
        if (['id', 'time', 'calories', 'pulse'].includes(field)) {
          const cellNum = Number(cell);
          const filterNum = Number(raw);
          switch (op) {
            case '>':  return cellNum >  filterNum;
            case '>=': return cellNum >= filterNum;
            case '<':  return cellNum <  filterNum;
            case '<=': return cellNum <= filterNum;
            case '!=': return cellNum !== filterNum;
            case '=':
            case '==': return cellNum === filterNum;
            default:   return true;
          }
        }

        // Строковая логика
        const cellStr   = String(cell).toLowerCase();
        const filterStr = String(raw).toLowerCase();
        switch (op) {
          case 'contains':   return cellStr.includes(filterStr);
          case 'equals':     return cellStr === filterStr;
          case 'startsWith': return cellStr.startsWith(filterStr);
          case 'endsWith':   return cellStr.endsWith(filterStr);
          default:           return true;
        }
      })
    );

    if (sortModel.length > 0) {
      const { field, sort } = sortModel[0];
      res = [...res].sort((a, b) => {
        const va = a[field as keyof WorkoutRecord] as any;
        const vb = b[field as keyof WorkoutRecord] as any;
        if (va == null || vb == null) return 0;
        const cmp = va < vb ? -1 : va > vb ? 1 : 0;
        return sort === 'asc' ? cmp : -cmp;
      });
    }

    return res;
  }, [records, filterModel, sortModel]);

  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          График и таблица тренировок
        </Typography>

        <SettingChart
          metric={metric}
          setMetric={setMetric}
          isBar={isBar}
          setIsBar={setIsBar}
        />

        <ChartView data={processed} metric={metric} isBar={isBar} />

        <TableView
          data={records}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          sortModel={sortModel}
          onSortModelChange={setSortModel}
        />
      </Container>
    </>
  );
};

export default Chart;
