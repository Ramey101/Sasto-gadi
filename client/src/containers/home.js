import React from "react";
import { useNavigate } from "react-router-dom";
// import { Box, Container } from "@mui/system";
// import { Button } from "@mui/material";
import "../App.css";
import { Divider, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
const Home = () => {
  // const navigate = useNavigate;
  // const assignRole = () => {
  //   // redux : buyer or seller
  //   navigate("/home");
  // };

  return (
    <>
      <Box
        className="homepage-container"
        sx={{ height: "100%", marginTop: "10rem" }}
      >
        <div className="button-container">
          <Typography
            variant="h3"
            sx={{
              color: "black",
              display: "fixed",
              justifyContent: "center",
              paddingRight: "6rem",
            }}
          >
            Car lis is here
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Home;
