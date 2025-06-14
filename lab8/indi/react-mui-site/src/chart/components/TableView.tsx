import React from 'react';
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridSortModel,
  GridToolbar
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

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
  filterModel: GridFilterModel;
  onFilterModelChange: (model: GridFilterModel) => void;
  sortModel: GridSortModel;
  onSortModelChange: (model: GridSortModel) => void;
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Дата', width: 120 },
  { field: 'workout', headerName: 'Тренировка', width: 180 },
  { field: 'time', headerName: 'Время', type: 'number', width: 120 },
  { field: 'calories', headerName: 'Калории', type: 'number', width: 120 },
  { field: 'pulse', headerName: 'Пульс', type: 'number', width: 120 }
];

const TableView: React.FC<Props> = ({
  data,
  filterModel,
  onFilterModelChange,
  sortModel,
  onSortModelChange
}) => (
  <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid<WorkoutRecord>
      rows={data}
      columns={columns}
      filterModel={filterModel}
      onFilterModelChange={onFilterModelChange}
      sortModel={sortModel}
      onSortModelChange={onSortModelChange}
      slots={{ toolbar: GridToolbar }}
      pageSizeOptions={[10, 20, 50]}
      disableRowSelectionOnClick
    />
  </Box>
);

export default TableView;
