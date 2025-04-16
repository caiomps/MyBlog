import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const data = {
    name,
    email,
    password,
    confirmPassword,
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      toast.error("senhas nao sao iguais");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkPassword()) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        data
      );
      console.log(response.data);
      toast.success("Cadastro feito com sucesso!!!");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error(error.response.data.error || "Erro ao registrar");
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    // plano de fundo
    <section className="flex flex-col items-center justify-center min-h-dvh bg-gradient-to-t from-gray-700 to-gray-900 p-4">
      <h1 className="text-center font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white m-6">
        Registro
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
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <p className="font-bold">Nome</p>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Digite seu Nome:"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col text-bold">
              <p className="font-bold">Email</p>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Digite seu Email:"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col">
              <p className="font-bold">Senha</p>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Digite sua senha"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col">
              <p className="font-bold">Confirme sua Senha</p>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirme a senha"
                className="border-2 border-gray-300 rounded-lg p-2"
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </label>

            <Button type={"submit"} txt={"Registrar"} />

            <div className="text-center text-sm">
              <p>
                Ja tem Registro?{" "}
                <Link className="text-cyan-500 hover:text-cyan-800" to="/Login">
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

export default Register;
