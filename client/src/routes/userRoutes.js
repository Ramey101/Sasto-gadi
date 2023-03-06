import { Routes, Route } from "react-router-dom";
import Navbar from "../components/header/navbar";
import VehicleTable from "../components/vehicleTable";
import Post from "../components/vehicleTable";
import Login from "../containers/auth/login";
import Register from "../containers/auth/signUp";
import VehicleRegister from "../containers/auth/vehicleRegister";
// import GettingStarted from "../gettingStarted";
import Home from "../containers/home";
import Roles from "../containers/roles";

const UserRoutes = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/roles" element={<Roles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/vehicleRegister" element={<VehicleRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<VehicleTable />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
