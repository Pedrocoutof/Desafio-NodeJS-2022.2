import jwt from "jsonwebtoken";

const checkToken = (req ,res, next) => {

    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if(!token){
        res
            .status('404')
            .send({  message: 'Token não enviado' })
    }else{
        try{
            jwt.verify(token, 'CodeVoa');
            next();
        }
        catch(err){
            res.status(498).send({
                message: 'Token expirado ou inválido.',
                erro: `${err}`
            })
        }
    }
}

export default checkToken;