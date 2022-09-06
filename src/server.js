import express from "express";
import db from "./config/db-connect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind('Erro de conexão'));
db.once("open", () => {
  console.log("Conexão realizada com sucesso.");
});

const app = express();
routes(app);

app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});