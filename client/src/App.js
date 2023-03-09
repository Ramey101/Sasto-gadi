import { Routes, Route } from "react-router-dom";
import Login from "./containers/auth/login";
import VehicleRegister from "./containers/auth/vehicleRegister";
import Register from "./containers/auth/register";
import Home from "./containers/home";
import Navbar from "./components/header/navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/vehicleRegister" element={<VehicleRegister />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/gettingstarted" element={<GettingStarted />} />
        <Route path="/post" element={<VehicleTable />} /> */}
      </Routes>
    </div>
  );
}

export default App;
