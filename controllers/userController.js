const { getAllUsers, deleteUser, createUser } = require("../models/user");

// Função para buscar todos os usuários
const getUsers = (req, res) => {
  res.json(getAllUsers());
};

// Função para deletar um usuário pelo id
const deleteUserById = (req, res) => {
  const { id } = req.params;
  deleteUser(parseInt(id));
  res.json({ message: "Usuário deletado com sucesso" });
};

// Função para criar um administrador
const createAdmin = (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const user = createUser(nome, email, senha, "Administrador");
    res.status(201).json({ message: "Administrador criado com sucesso", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUsers, deleteUserById, createAdmin };
