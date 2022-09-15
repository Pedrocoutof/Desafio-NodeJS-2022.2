import express from "express";
import checkToken from "../middlewares/middlewares.js";
import DepartamentoController from "../controllers/departamentoController.js";

const routes = express.Router();

routes
    .get('/departamentos', DepartamentoController.getDepartamentos)
    .post('/departamentos', checkToken, DepartamentoController.saveDepartamento)
    .put('/departamentos/:id', checkToken, DepartamentoController.atualizaDepartamento)
    .get('/departamentos/:id', DepartamentoController.getDepartamentoId)
    .delete('/departamentos/:id', checkToken,  DepartamentoController.excluiDepartamento)


export default routes;