import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* login e registro */}
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>

      {/* telas de posts   */}
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
