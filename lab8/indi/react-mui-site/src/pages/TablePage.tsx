import React from 'react';
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar
} from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import data from '../data';

interface WorkoutRecord {
  id: number;
  date: string;
  workout: string;
  time: number;
  calories: number;
  pulse: number;
}

const rows: GridRowsProp<WorkoutRecord> = (data as WorkoutRecord[]).map(item => ({
  ...item,
  id: item.id
}));

const columns: GridColDef<WorkoutRecord>[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 60, headerAlign: 'center', align: 'center' },
  { field: 'date', headerName: 'Дата', flex: 1, minWidth: 100 },
  { field: 'workout', headerName: 'Тренировка', flex: 1.5, minWidth: 150 },
  { field: 'time', headerName: 'Время (мин)', type: 'number', flex: 1, minWidth: 120 },
  { field: 'calories', headerName: 'Калории', type: 'number', flex: 1, minWidth: 120 },
  { field: 'pulse', headerName: 'Пульс', type: 'number', flex: 1, minWidth: 100 }
];

const TablePage: React.FC = () => (
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Typography variant="h4" gutterBottom>
      Таблица тренировок
    </Typography>

    <Paper elevation={2} sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ height: 630, width: '100%', overflowX: 'auto' }}>
        <DataGrid<WorkoutRecord>
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[10, 20, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } }
          }}
          disableRowSelectionOnClick
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'background.paper'
            }
          }}
        />
      </Box>
    </Paper>
  </Container>
);

export default TablePage;
