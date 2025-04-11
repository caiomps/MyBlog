const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const conn = require("./db/conn");

const port = 3000;

//conectando o banco de dados sql
conn();

//conectando o front
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Servidor rodadando na porta " + port);
});
