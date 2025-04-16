const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { connectDB, sequelize } = require("./db/conn"); // Importe sequelize também
const setupAssociations = require("./models/associantions"); // Importe a função de associações
//importando as rotas
const userRoutes = require("./routes/UserRoutes");
const postRoutes = require("./routes/PostRoutes");

const port = 3000;

//conectando o banco de dados sql
connectDB()
  .then(() => {
    // Execute as associações APÓS a conexão bem-sucedida
    setupAssociations();

    // Sincronize os modelos com o banco de dados (agora com as associações definidas)
    return sequelize.sync();
  })
  .then(() => {
    // Iniciando o servidor APÓS a sincronização
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //rotas do blog
    app.use("/api", userRoutes);
    app.use("/api", postRoutes);

    app.listen(port, () => {
      console.log("Servidor rodadando na porta " + port);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar e sincronizar o banco de dados:", error);
  });
