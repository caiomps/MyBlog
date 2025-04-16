import React, { useEffect, useState } from "react";
import axios from "axios";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Post from "../components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadingPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
      }
    };

    loadingPosts();
  }, []);

  console.log("posts: ", posts);
  return (
    <>
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
                  <li key={element.id}>
                    <Post
                      id={element.id}
                      name={element.userName}
                      title={element.title}
                      content={element.content}
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

export default HomePage;
