const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

const PostController = require("../controllers/PostController");

router.get("/posts", PostController.getAllPosts);
router.post("/posts", PostController.createPost);

router.get("/posts/:id", PostController.getAllPostsUserId);
router.delete("/posts/:id", PostController.postDelete);
router.put("/posts/:id", PostController.postEdit);

module.exports = router;
