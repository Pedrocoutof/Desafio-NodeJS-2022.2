import membros from "../models/Membro.js";

class MembrosController{
    static getMembros = (req, res) => {
        membros.find()
        .populate('departamento')
        .populate('cargo')
        .exec((err, membros) => {
            res.status(200).json(membros);
          })
    }

    static getMembroID = (req, res) => {
        let id = req.params.id;

        membros.findById(id)
        .populate('departamento')
        .populate('cargo').
        exec((err, membro) =>
        {
            if(err){
                res.status(400).send({
                    message: "Usuário não encontrado.",
                    erro: `${err}`,
                })
            }
            else{
                res.status(200).send(membro);
            }
        }
    )


    }

    static saveMembro = (req, res) => {

        let novo_membro = new membros(req.body);
        console.log(req)

        novo_membro.save((err) => {
            if(err){
                res.status(500).send(
                    {
                        message: 'Nao foi possivel cadastrar membro.',
                        erro: `${err.toString()}`
                });
            }
            else{
                res.status(201).send(novo_membro.toJSON());
            }
        })

    }

    static atualizaMembro = (req, res) =>{
        let id = req.params.id;

        console.log(id);
        console.log(req.body);

        membros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
           if(err){
                res.status(500).send({
                    message: "Nao foi possivel atualizar membro.",
                    erro: `${err}`,
                })
           }
           else{
            res.status(200).send({
                message: "Membro atualizado com sucesso.",
                erro: `${err}`
            })
           }
        })
    }

    static excluiMembro = (req, res) =>{
        let id = req.params.id;

        membros.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send({
                    message: "Não foi possivel deletar membro.",
                    erro: `${err}`
                })
            }
            else{
                res.status(200).send({
                    message: "Membro deletado com sucesso.",
                    erro: `${err}`
                })
            }
        })
    }

    static realizaLogin = (req, res) => {
        membros
        .findOne(
            {
                'email': req.body.email,
                'senha': req.body.senha,
            },
            (err, _membro) =>
            {
                if(err){
                    res.status(400).send({
                        message: "Não foi possível efetuar o login.",
                        erro: `${err}`,
                    })
                }
                if(_membro == null){
                    res.status(404).send({
                        message: "Email e/ou senha incorretos.",
                        erro: `${err}`,
                    })
                }
                else{
                    res.status(201).send(_membro);
                }
            }
        )
    }
}

export default MembrosController;