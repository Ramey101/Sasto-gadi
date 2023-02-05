import { Routes, Route } from "react-router-dom";
import GettingStarted from "../containers/gettingStarted";
import Home from "../containers/home";
import Roles from "../containers/roles";

const UserRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GettingStarted />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
