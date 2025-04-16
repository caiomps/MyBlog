const User = require("../models/User");
const bcrypt = require("bcrypt");

const UserService = {
  async registerUser({ name, email, password }) {
    const userEmail = await User.findOne({ where: { email } });

    if (userEmail) {
      throw new Error("Este email já está cadastrado.");
    }

    if (password.length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }

    //criptografar a senha
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return newUser;
  },

  async loginUser({ email, password }) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return { error: "Usuário não encontrado" };
      }

      const senhaCorreta = await bcrypt.compare(password, user.password);

      if (!senhaCorreta) {
        return { error: "Senha incorreta" };
      }

      return user;
    } catch (error) {
      console.error("Erro no login:", error);
      return { error: "Erro interno" };
    }
  },
};

module.exports = UserService;
