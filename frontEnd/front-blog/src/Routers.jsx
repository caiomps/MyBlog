import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHomeScreen from "./pages/PublicHomeScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* login e registro */}
      <Routes>
        <Route path="/" element={<PublicHomeScreen></PublicHomeScreen>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      {/* telas de posts   */}
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
