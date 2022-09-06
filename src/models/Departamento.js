import mongoose from "mongoose";

const departamentoSchema = new mongoose.Schema({
    nome: {type: String},
});

const departamentos = mongoose.model('departamentos', departamentoSchema);

export default departamentos;