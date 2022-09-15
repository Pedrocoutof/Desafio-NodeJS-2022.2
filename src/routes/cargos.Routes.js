import express  from "express";
import CargoController from "../controllers/cargoController.js";

const router = express.Router();

router
    .get('/cargos', CargoController.getCargos)
    .post('/cargos', checkToken, CargoController.saveCargo)
    .put('/cargos/:id', checkToken,  CargoController.atualizaCargo)
    .get('/cargos/:id', CargoController.getCargoID)
    .delete('/cargos/:id', checkToken, CargoController.excluiCargo)

export default router;