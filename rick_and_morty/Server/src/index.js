require("dotenv").config(); // Agrega al objeto "process" en la prop "env" nuestras variables
const { PORT, DB_USER } = process.env;
const { connectionTuki } = require("./DB_connection");

const server = require("./app");


connectionTuki
  .sync({ alter: true })
  .then((value) => {
    server.listen(PORT, () => {
      console.log("Server & DDBB Running ✅");
    });
  })
  .catch((err) => console.error(err));
