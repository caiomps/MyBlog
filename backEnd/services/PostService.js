const { getAllPostsUserId } = require("../controllers/PostController");
const Post = require("../models/Post");

const PostService = {
  getAllPosts: async () => {
    const posts = await Post.findAll();

    if (!posts) {
      throw new Error("Nenhum Post encontrado");
    }
    return posts;
  },

  getAllPostsUserId: async (userId) => {
    const posts = await Post.findAll({
      where: { userId },
    });

    if (!posts) {
      throw new Error("Nenhum Post encontrado");
    }
    return posts;
  },

  createPost: async ({ title, content, userId, userName }) => {
    if (!title) {
      throw new Error("Titulo nao pode esta vazio");
    }

    if (!content) {
      throw new Error("Conteudo nao pode esta vazio");
    }

    const newPost = await Post.create({ title, content, userId, userName });

    return { msg: "Post criado com sucesso", post: newPost };
  },

  postDelete: async (id) => {
    const post = await Post.destroy({ where: { id } });

    return `post deletado com sucessos`;
  },

  postEdit: async (id, title, content) => {
    const post = await Post.findByPk(id);

    if (!post) {
      return { msg: "post nao encontrado" };
    }

    const postAtulizado = await post.update({ title, content });

    return { msg: "post atulizado com sucesso" };
  },
};

module.exports = PostService;
