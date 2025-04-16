const UserService = require("../services/UserService");
const generateToken = require("./AuthController");

const UserController = {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const newUser = await UserService.registerUser({ name, email, password });

      return res.status(201).json({
        message: "Usuário criado com sucesso",
        newUser,
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ error: error.message });
    }
  },

  async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserService.loginUser({ email, password });

      if (user.error) {
        return res.status(401).json({ msg: user.error });
      }

      const token = generateToken(user.id, email, user.name);
      console.log(token);

      return res
        .status(200)
        .json({ msg: "Usuário logado", user, token: token });
    } catch (error) {
      console.error("Erro ao logar:", error);
      return res
        .status(500)
        .json({ msg: "Erro interno no servidor controller" });
    }
  },
};

module.exports = UserController;
