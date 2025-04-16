const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/conn");
const User = require("./User");
const Post = require("./Post");

const Like = sequelize.define(
  "Like",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Like;
