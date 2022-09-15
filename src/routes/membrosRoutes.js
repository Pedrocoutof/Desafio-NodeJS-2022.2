import express  from "express";
import MembrosController from "../controllers/membroController.js";
import checkToken from "../middlewares/middlewares.js"

const router = express.Router();

router
    .post('/membros/login', MembrosController.realizaLogin)
    .get('/membros', MembrosController.getMembros)
    .post('/membros', checkToken, MembrosController.saveMembro)
    .put('/membros/:id', checkToken, MembrosController.atualizaMembro)
    .get('/membros/:id', checkToken, MembrosController.getMembroID)
    .delete('/membros/:id', checkToken, MembrosController.excluiMembro)

export default router;