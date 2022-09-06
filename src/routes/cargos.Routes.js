import express  from "express";
import CargoController from "../controllers/cargoController.js";

const router = express.Router();

router
    .get('/cargos', CargoController.getCargos)
    .post('/cargos', CargoController.saveCargo)
    .put('/cargos/:id', CargoController.atualizaCargo)
    .get('/cargos/:id', CargoController.getCargoID)
    .delete('/cargos/:id', CargoController.excluiCargo)

export default router;