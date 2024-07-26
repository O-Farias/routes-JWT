const express = require("express");
const {
  getUsers,
  deleteUserById,
  createAdmin,
} = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", verifyToken, isAdmin, getUsers);
router.delete("/:id", verifyToken, isAdmin, deleteUserById);
router.post("/admin", verifyToken, isAdmin, createAdmin);

module.exports = router;
