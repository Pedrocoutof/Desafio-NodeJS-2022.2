import mongoose from "mongoose";

console.log('Iniciando conexão...');
mongoose.connect("mongodb+srv://admin:admin@desafio-node-2022-2.cvges0a.mongodb.net/desafio-node-2022-2");
let database = mongoose.connection;

export default database;