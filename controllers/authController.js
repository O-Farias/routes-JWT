const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { createUser, getUserByEmail } = require("../models/user");
const { secret, expiresIn } = require("../config/jwt");

// Função de registro
const register = (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const user = createUser(nome, email, senha);
    res.status(201).json({ message: "Usuário registrado com sucesso", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função de login
const login = (req, res) => {
  const { email, senha } = req.body;
  const user = getUserByEmail(email);
  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return res.status(401).json({ error: "Credenciais incorretas" });
  }
  const token = jwt.sign({ id: user.id, papel: user.papel }, secret, {
    expiresIn,
  });
  res.json({ message: "Login realizado com sucesso", token });
};

module.exports = { register, login };
