const express = require("express");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.get("/welcome", verifyToken, (req, res) => {
  res.send(`Bem-vindo, ${req.userId ? req.userId : "Visitante"}!`);
});

module.exports = router;
