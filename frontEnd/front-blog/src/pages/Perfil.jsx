import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Trash, Pencil } from "lucide-react";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Post from "../components/Post";
import { toast } from "react-toastify";
import EditPostModal from "../components/EditPostModal";

const Perfil = () => {
  const [posts, setPosts] = useState([]);

  const [editPost, setEditPost] = useState(null); // post que está sendo editado
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenDecode = jwtDecode(token);
    const loadingPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/posts/${tokenDecode.id}`
        );
        setPosts(res.data);
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
      }
    };

    loadingPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/posts/${id}`);
      toast.success("Post deletado com sucesso!");
      console.log(res);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Erro ao deletar post:", error);
    }
  };

  const openEditModal = (post) => {
    setEditPost(post);
    setEditTitle(post.title);
    setEditContent(post.content);
    setIsModalOpen(true);
  };

  const handleEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/posts/${editPost.id}`,
        {
          title: editTitle,
          content: editContent,
        }
      );
      toast.success("Post editado com sucesso!");
      // atualiza localmente a lista de posts
      setPosts(
        posts.map((post) =>
          post.id === editPost.id
            ? { ...post, title: editTitle, content: editContent }
            : post
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao editar post:", error);
    }
  };

  console.log("posts: ", posts);
  return (
    <>
      <EditPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleEdit}
        title={editTitle}
        setTitle={setEditTitle}
        content={editContent}
        setContent={setEditContent}
      />

      <Header />
      <Main>
        <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 py-12">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 border-b-4 border-yellow-400 inline-block">
              Posts
            </h1>

            <ul className="space-y-4 mt-6">
              {posts.map((element) => {
                console.log(element);
                return (
                  <li key={element.id} className="flex items-center gap-4">
                    <Post
                      name={element.userName}
                      title={element.title}
                      content={element.content}
                    ></Post>
                    <Trash
                      className="text-red-600 text-5xl cursor-pointer"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    ></Trash>
                    <Pencil
                      className="text-yellow-400 cursor-pointer"
                      onClick={() => openEditModal(element)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Perfil;
