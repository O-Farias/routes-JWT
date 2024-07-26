const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const welcomeRoute = require("./routes/welcomeRoute");

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/", welcomeRoute);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
