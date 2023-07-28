const morgan = require("morgan");
const cors = require("cors");
// Routers
const characterRouter = require("./routes/characters");
const userRouter = require("./routes/user");
const favoriteRouter = require("./routes/favorites");
// Express
const express = require("express");
const server = express();

// Middlewars
server.use(express.json()); // para poder recibir JSON por req.body
server.use(morgan("dev")); // Me muestra en consola como sale la REQ y la RES

// Permisos -> Cors
server.use(cors()); 
// Routers --> Que rutas voy a usar
server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", favoriteRouter);

server.get("/health-check", (req, res) => {
  res.send("Working");
});


module.exports = server