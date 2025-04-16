const User = require("./User");
const Post = require("./Post");
const Like = require("./Like");

function setupAssociations() {
  // User 1:N Post
  User.hasMany(Post, { foreignKey: "userId" });
  Post.belongsTo(User, { foreignKey: "userId" });

  // User 1:N Like
  User.hasMany(Like, { foreignKey: "userId" });
  Like.belongsTo(User, { foreignKey: "userId" });

  // Post 1:N Like
  Post.hasMany(Like, { foreignKey: "postId" });
  Like.belongsTo(Post, { foreignKey: "postId" });
}

module.exports = setupAssociations;
