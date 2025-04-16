import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const data = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        data
      );
      console.log(response.data);
      const { token } = response.data;
      localStorage.setItem("token", token); // Armazena o token no localStorage
      toast.success("Login realizado com sucesso!");
      navigate("/homepage");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    // plano de fundo
    <section className="flex flex-col items-center justify-center min-h-dvh bg-gradient-to-t from-gray-700 to-gray-900 p-4">
      <h1 className="text-center font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white m-6">
        Login
      </h1>

      {/* card de login */}
      <div className="bg-white w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl lg:min-h-[500px] rounded-2xl shadow-2xl">
        {/* conteudo do card */}
        <div className="flex flex-col items-center justify-center gap-5 p-8 sm:p-10">
          {/* imagem */}
          <div className="w-24 h-24">
            <CircleUser className="h-full w-full"></CircleUser>
          </div>

          {/* formulário */}
          <form
            className="flex flex-col gap-5 w-full"
            action="POST"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col text-bold">
              <p className="font-bold">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Digite seu Email:"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </label>

            <label className="flex flex-col">
              <p className="font-bold">Senha</p>
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </label>

            <Button type={"submit"} txt={"Login"} className="w-full" />

            <div className="text-center text-sm">
              <p>
                Não tem login?{" "}
                <Link
                  className="text-cyan-500 hover:text-cyan-800"
                  to="/register"
                >
                  Clique aqui!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
