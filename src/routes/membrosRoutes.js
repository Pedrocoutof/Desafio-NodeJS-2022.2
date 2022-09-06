import express  from "express";
import MembrosController from "../controllers/membroController.js";

const router = express.Router();

router
    .get('/membros', MembrosController.getMembros)
    .post('/membros', MembrosController.saveMembro)
    .put('/membros/:id', MembrosController.atualizaMembro)
    .get('/membros/:id', MembrosController.getMembroID)
    .delete('/membros/:id', MembrosController.excluiMembro)

export default router;