import express from "express";
import DepartamentoController from "../controllers/departamentoController.js";

const routes = express.Router();

routes
    .get('/departamentos', DepartamentoController.getDepartamentos)
    .post('/departamentos', DepartamentoController.saveDepartamento)
    .put('/departamentos/:id', DepartamentoController.atualizaDepartamento)
    .get('/departamentos/:id', DepartamentoController.getDepartamentoId)
    .delete('/departamentos/:id', DepartamentoController.excluiDepartamento)


export default routes;