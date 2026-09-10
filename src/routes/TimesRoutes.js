import express from "express";
import TimesController from "../controller/TimesController.js";

const routes = express.Router();

routes.get("/times", TimesController.listarTodos);
routes.post("/times", TimesController.cadastrar);
routes.get("/times/:id", TimesController.buscarPorId);
routes.delete("/times/:id", TimesController.excluir);

export default routes;