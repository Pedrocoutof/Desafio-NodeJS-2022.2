import mongoose from "mongoose";

const cargoSchema = new mongoose.Schema({
    nome: {type: String},
    }
);

const cargos = mongoose.model('cargos', cargoSchema);

export default cargos;