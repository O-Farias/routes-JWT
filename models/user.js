const bcrypt = require("bcryptjs");

// Array de usuários
let users = [
  {
    id: 1,
    nome: "Admin",
    email: "admin@example.com",
    senha: bcrypt.hashSync("admin123", 8),
    papel: "Administrador",
  },
];

// Função para criar um usuário
const createUser = (nome, email, senha, papel = "Usuário Padrão") => {
  if (users.find((user) => user.email === email)) {
    throw new Error("Email já cadastrado");
  }
  const id = users.length + 1;
  const hashedPassword = bcrypt.hashSync(senha, 8);
  const user = { id, nome, email, senha: hashedPassword, papel };
  users.push(user);
  return user;
};

// Função para buscar um usuário pelo email
const getUserByEmail = (email) => users.find((user) => user.email === email);

// Função para buscar todos os usuários
const getAllUsers = () => users;

// Função para deletar um usuário
const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

module.exports = { createUser, getUserByEmail, getAllUsers, deleteUser };
