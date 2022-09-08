import departamentos from "../models/Departamento.js";

class DepartamentoController{
    static getDepartamentos = (req, res) =>{
        departamentos.find((err, _departamentos) =>
        {
            if(err){
                res.status(500).send({
                    message: 'Não foi possivel realizar a requisição',
                    erro: `${err}`
                })
            }
            else{
                res.status(200).send(_departamentos)
            }
        })
    }

    static saveDepartamento = (req, res) =>{

        let novo_depto = new departamentos(req.body);

        novo_depto.save((err) => {
            if(err){
                res.status(500).send({
                    message: "Não foi possivel adicionar departamento.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(201).send(novo_depto.toJSON());
            }
        })
    }

    static atualizaDepartamento = (req, res) => {
        let id = req.params.id;

        departamentos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel atualizar departamento.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send({
                    message: "Departamento atualizado com sucesso.",
                    erro: `${err}`
                })
            }
        })
    }

    static getDepartamentoId = (req, res) => {
        let id = req.params.id;
        
        departamentos.findById(id, (err, _departamento) =>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel encontrar departamento.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send(_departamento)
            }
        })
    }

    static excluiDepartamento = (req, res) => {
        let id = req.params.id;

        departamentos.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(400).send({
                    message: "Não foi possivel deletar departamento.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send({
                    message: "Departamento deletado com sucesso",
                    erro: `${err}`
                })
            }
        })
    }
}

export default DepartamentoController;