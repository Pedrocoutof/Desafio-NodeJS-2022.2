import mongoose from "mongoose";

const membroSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String},
    aniversario: {type: Date},
    departamento: {type: mongoose.Schema.Types.ObjectId, ref: 'departamentos'},
    cargo: {type: mongoose.Schema.Types.ObjectId, ref: 'cargos'},    
    }
);

const membros = mongoose.model('membros', membroSchema);

export default membros;