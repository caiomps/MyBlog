import React from "react";
import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PublicHomeScreen = () => {
  return (
    <>
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
              <Link to={"/login"} className="hover:text-yellow-300">
                Login
              </Link>
              <Link to={"/register"} className="hover:text-yellow-300">
                Registrar
              </Link>
            </ul>
          </div>
        </div>
      </header>

      <main className="text-center bg-gray-900 px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Bem-vindo ao ThinkIt!
        </h1>
        <p className="text-white text-base sm:text-lg mb-8 max-w-xl">
          O seu lugar para compartilhar ideias e conhecimentos.
        </p>
        <Link
          to={"/login"}
          className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Começar
        </Link>
      </main>

      <Footer></Footer>
    </>
  );
};

export default PublicHomeScreen;
