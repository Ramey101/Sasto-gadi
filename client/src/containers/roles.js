import React from "react";
import { Alert, Grid } from "@mui/material";
import NavBar from "../components/header/navbar";
import CustomCard from "../components/customCard";
import { Link, useNavigate, useSelector } from "react-router-dom";

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
        <Link to={"/home"}>
          <CustomCard role="buyer" />{" "}
        </Link>
        <Link to={"/register"}>
          <CustomCard role="seller" />
        </Link>
      </Grid>
    </div>
  );
};

export default Roles;
