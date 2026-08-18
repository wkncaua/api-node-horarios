import express from "express";
import HorarioController from "../controller/HorarioController.js";

const routes = express.Router();

routes.get("/horarios", HorarioController.listarTodos);
routes.post("/horarios", HorarioController.cadastrar);
routes.get("/horarios/:id", HorarioController.buscarPorId);
routes.put("/horarios/:id", HorarioController.atualizar);
routes.delete("/horarios/:id", HorarioController.excluir);

export default routes;