import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lightbulb, LogOut } from "lucide-react";
import Perfil from "../pages/Perfil";
import HomePage from "../pages/Perfil";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <div className="w-full m-auto max-w-[1400px] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-white font-bold text-2xl lg:text-5xl">
          <h1>
            Think<span className="text-yellow-300">It</span>
          </h1>
          <Lightbulb className="text-yellow-300 text-3xl" />
        </div>

        <div>
          <ul className="flex gap-4 md:gap-10 text-xl text-white font-semibold lg:text-3xl">
            <Link to={"/homepage"} className="hover:text-yellow-300">
              Home
            </Link>

            <Link to={"/perfil"} className="hover:text-yellow-300">
              Perfil
            </Link>
            <Link to={"/createpost"} className="hover:text-yellow-300">
              criar post
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 flex items-center gap-3"
            >
              Logout <LogOut></LogOut>
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
