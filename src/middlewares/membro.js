import jwt from "jsonwebtoken";

module.exports = (res ,req, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.decode(token, 'CodeVoa');
        next();
    }
    catch(err){
        res
            .status('401')
            .send({
                message: "Usuário não autenticado.",
                erro: `${err}`,
            })
    }
}