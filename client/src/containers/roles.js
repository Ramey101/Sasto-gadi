// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { assignUserRole } from "../redux/reducers/userSlice";
// import CustomCard from "../components/customCard";
// import { Typography } from "@mui/material";
// import Person from "@mui/icons-material/Person";

// const Home = () => {
//   const navigate = useNavigate;
//   const dispatch = useDispatch;
//   const assignRole = (role) => {
//     navigate("/login");
//     dispatch(assignUserRole(role));
//   };

//   // const { userRole } = useSelector((state) => state.user);

//   return (
//     <section id="role_selection">
//       <Typography variant="h2" sx={{ mt: "2%", color: "gray" }}>
//         Select Your Role:
//       </Typography>
//       <div className="user_role">
//         <CustomCard role="buyer" assignRole={assignRole} icon={Person} />
//         <CustomCard role="seller" assignRole={assignRole} />
//       </div>
//     </section>
//   );
// };

// export default Home;
