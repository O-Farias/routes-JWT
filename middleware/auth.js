const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

// Middleware para verificar o token de autenticação
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "Token não fornecido" });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Falha na autenticação" });
    req.userId = decoded.id;
    req.userRole = decoded.papel;
    next();
  });
};

// Middleware para verificar se o usuário é administrador
const isAdmin = (req, res, next) => {
  if (req.userRole !== "Administrador") {
    return res.status(403).json({ error: "Acesso negado" });
  }
  next();
};

module.exports = { verifyToken, isAdmin };
