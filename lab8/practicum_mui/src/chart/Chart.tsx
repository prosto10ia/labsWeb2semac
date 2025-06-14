import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import NavBar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import { years, countries, types } from "./Groupdata";
import GroupChart from "./components/GroupChart";

type tSelect = "Страна" | "Год" | "Тип";

const Chart = () => {
  const [group, setGroup] = useState<tSelect>("Страна");
  const [groupData, setGroupData] = useState(countries);

  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as tSelect);

    switch (event.target.value as tSelect) {
      case "Страна":
        setGroupData(countries);
        break;
      case "Год":
        setGroupData(years);
        break;
      case "Тип":
        setGroupData(types);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavBar active="3" />
      <Box sx={{ width: "200px", m: "auto", marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel> Группировать по </InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Группировать по"
            onChange={handleChange}
          >
            <MenuItem value="Страна"> Стране </MenuItem>
            <MenuItem value="Год"> Году </MenuItem>
            <MenuItem value="Тип"> Типу </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData} />
      <GroupGrid data={groupData} />
    </>
  );
};

export default Chart;