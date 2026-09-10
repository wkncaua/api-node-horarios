import express from "express";
import SorteioController from "../controller/SorteioController.js";

const routes = express.Router();

routes.post("/sorteio", SorteioController.sortear);
routes.delete("/sorteios/:id", SorteioController.excluir);

export default routes;