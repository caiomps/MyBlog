import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import PublicHomeScreen from "./pages/PublicHomeScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
import HomePage from "./pages/HomePage";
import RoutePrivate from "./RoutePrivate";
import CreatePost from "./pages/CreatePost";
import Perfil from "./pages/Perfil";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* login e registro */}
        <Route path="/" element={<PublicHomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* telas depois do login */}
        <Route
          path="/homepage"
          element={
            <RoutePrivate>
              <HomePage></HomePage>
            </RoutePrivate>
          }
        ></Route>

        <Route
          path="/createpost"
          element={
            <RoutePrivate>
              <CreatePost></CreatePost>
            </RoutePrivate>
          }
        ></Route>

        <Route
          path="/perfil"
          element={
            <RoutePrivate>
              <Perfil></Perfil>
            </RoutePrivate>
          }
        ></Route>

        {/* página 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
