import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate;
  const assignRole = () => {
    // redux : buyer or seller
    navigate("/home");
  };

  return (
    <div>
      <button onClick={() => assignRole("buyer")}>buyer</button>
      <button onClick={() => assignRole("seller")}>seller</button>
      <button>forum </button>
    </div>
  );
};

export default Home;
