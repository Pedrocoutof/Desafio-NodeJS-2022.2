import express  from "express";
import MembrosController from "../controllers/membroController.js";
import checkToken from "../middlewares/middlewares.js"

const router = express.Router();

router
    .post('/membros/login', MembrosController.realizaLogin)
    .get('/membros', MembrosController.getMembros)
    .post('/membros', MembrosController.saveMembro)
    .put('/membros/:id', MembrosController.atualizaMembro)
    .get('/membros/:id', MembrosController.getMembroID)
    .delete('/membros/:id', MembrosController.excluiMembro)

export default router;