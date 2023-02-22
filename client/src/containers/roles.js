import React from "react";
import { Alert, Grid } from "@mui/material";
import CustomCard from "../components/customCard";
import { useNavigate, useSelector } from "react-router-dom";

const Roles = () => {
  // const Home = () => {
  //   // const navigate = useNavigate();
  //   // const dispatch = useDispatch() ;
  //   const assignRole = (role) => {
  //     Alert('user is slected')
  //   };
  //   const { userRole } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Grid
        container
        flexDirection={"row"}
        alignContent={"center"}
        justifyContent={"center"}
        spacing={2}
        marginTop={"5%"}
      >
        <CustomCard role="buyer" />
        <CustomCard role="seller" />
      </Grid>
    </div>
  );
};

export default Roles;
