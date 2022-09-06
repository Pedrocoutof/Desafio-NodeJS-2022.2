import express from "express";
import membrosRoutes from './membrosRoutes.js';
import cargosRoutes from './cargos.Routes.js';

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({message: 'Endpoint padrão'});
    })
    app.use(
        express.json(),
        membrosRoutes,
        cargosRoutes,
    )
}

export default routes;