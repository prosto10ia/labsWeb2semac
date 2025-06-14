import { Box, Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import structures from "../data";

const Building = () => {
  const { id } = useParams();

  const structure = structures[Number(id)];

  return (
    <div>
      <NavBar active="" />
      <Typography
        variant="h5"
        sx={{
          justifyContent: "center",
          display: "flex",
          marginTop: 5,
        }}
      >
        {structure.title}
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={structure.img}
          alt=""
          style={{
            width: "25%",
            height: "25%",
            objectFit: "cover",
            borderRadius: "12px",
            border:"solid 1px lightgrey"
          }}
        />
      </div>
      <Typography
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
          justifyContent: "center",
          margin: 5,
          alignItems: "flex-start",
        }}
      >
        <Box 
          sx={{
            border:"solid 1px lightgrey",
            borderRadius:"12px",
            padding:"12px"
        }}
          >
            {structure.description[0]}
        </Box>
        <Box 
        sx={{border:"solid 1px lightgrey",
          borderRadius:"12px",
          padding:"12px"
        }}
          >{structure.description[1]}
        </Box>
      </Typography>{" "}
    </div>
  );
};

export default Building;