const jwt = require("jsonwebtoken");

const generateToken = (id, email, name) => {
  const token = jwt.sign({ id, email, name }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = generateToken;
