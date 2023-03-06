import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/header/navbar";
import { assignUserRole } from "../redux/reducers/userSlice";
import CustomCard from "../components/customCard";
import { Typography } from "@mui/material";
import SportsMotorsports from "@mui/icons-material/SportsMotorsports";
import Person from "@mui/icons-material/Person";

const Home = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch;
  const assignRole = (role) => {
    navigate("/");
    dispatch(assignUserRole(role));
  };

  const { userRole } = useSelector((state) => state.user);

  return (
    <section id="role_selection">
      <div className="user_role">
        {/* <Typography variant="h2">Please select you Role</Typography> */}
        <CustomCard role="buyer" assignRole={assignRole} icon={Person} />
        <CustomCard role="seller" assignRole={assignRole} />
      </div>
    </section>
  );
};

export default Home;
