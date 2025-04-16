import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const decodeToken = jwtDecode(token);
      console.log(decodeToken);
      const res = await axios.post("http://localhost:3000/api/posts", {
        title,
        content,
        userId: decodeToken.id,
        userName: decodeToken.name,
      });
      console.log(res.data);
    } catch (err) {
      console.error("Erro ao criar post:", err);
    }
    setContent("");
    setTitle("");
  };

  return (
    <>
      <Header />
      <Main>
        <section className="w-full max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8 border-b-4 border-yellow-400 inline-block">
            Criar novo post
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-8"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Título do post:
              </label>
              <input
                type="text"
                value={title}
                placeholder="Digite o título"
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="content"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
              >
                Conteúdo do post:
              </label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                placeholder="Escreva o conteúdo aqui..."
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Publicar post
            </button>
          </form>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default CreatePost;
