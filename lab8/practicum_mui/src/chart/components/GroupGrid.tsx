import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tGroup } from "../Groupdata";
import { Container } from "@mui/material";
import { ruRU } from "@mui/x-data-grid/locales";

type GroupProps = {
  data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
  const columns: GridColDef[] = [
    { field: "Группа", flex: 1 },
    { field: "Минимальная высота", flex: 0.5 },
    { field: "Максимальная высота", flex: 0.5 },
    { field: "Средняя высота", flex: 0.5 },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: "700px", mt: "20px" }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={data}
        columns={columns}
        showToolbar
        pageSizeOptions={[10, 20, 30, 100]}
      />
    </Container>
  );
}

export default GroupGrid;