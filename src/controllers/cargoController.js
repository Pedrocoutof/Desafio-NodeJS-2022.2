import cargos from "../models/Cargo.js";

class CargoController {
    static getCargos = (req, res) =>{
        cargos.find((err, _cargos) =>{
            if(err){
                res.status(500).send({
                    message: "Erro de requisição do metodo get",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send(_cargos);
            }
        })
    };
    
    static saveCargo = (req, res) =>{

        let novo_cargo = new cargos(req.body);

        novo_cargo.save((err) => {
            if(err){
                res.status(500).send({
                    message: "Não foi possivel adicionar cargo.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(201).send(novo_cargo.toJSON());
            }
    }
    )
    };

    static atualizaCargo = (req, res) =>
    {
        let id = req.params.id;

        cargos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel atualizar cargo.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send({
                    message: "Cargo atualizado com sucesso.",
                })
            }
        })
    }

    static getCargoID = (req, res) =>{
        let id = req.params.id;

        cargos.findById(id, (err, cargo)=>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel encontrar cargo.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send(cargo);
            }
        })
    }

    static excluiCargo = (req, res) =>{
        let id = req.params.id;

        cargos.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel deletar cargo.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send({
                    message: "Cargo deletado com sucesso.",
                })
            }
        })
    }

   
}

export default CargoController;