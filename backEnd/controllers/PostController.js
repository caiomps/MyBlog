const PostService = require("../services/PostService");

const PostController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await PostService.getAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      return res.status(500).json({ error: error.message });
    }
  },

  getAllPostsUserId: async (req, res) => {
    const userId = req.params.id;
    try {
      const posts = await PostService.getAllPostsUserId(userId);
      return res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      return res.status(500).json({ error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content, userId, userName } = req.body;

      const newPost = await PostService.createPost({
        title,
        content,
        userId,
        userName,
      });

      return res.status(201).json(newPost);
    } catch (error) {
      console.error("Erro ao criar post:", error);
      return res.status(500).json({ error: error.message });
    }
  },
  postDelete: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await PostService.postDelete(id);

      return res.status(200).json({ msg: "Post Deletado com sucesso!!!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  postEdit: async (req, res) => {
    try {
      const { title, content } = req.body;

      const { id } = req.params;

      const post = await PostService.postEdit(id, title, content);

      return res.status(200).json({ msg: "post atualizado com sucesso" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

module.exports = PostController;
