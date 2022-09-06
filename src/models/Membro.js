import mongoose from "mongoose";

const membroSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String},
    aniversario: {type: Date},
    departamento: {type: Object},
    cargo: {type: Object},    
    }
);

const membros = mongoose.model('membros', membroSchema);

export default membros;