import express from "express";
import membrosRoutes from './membrosRoutes.js';

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({message: 'Endpoint padrão'});
    })
    app.use(
        express.json(),
        membrosRoutes
    )
}

export default routes;