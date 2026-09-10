import express from "express";
import JogadoresController from "../controller/JogadoresController.js";

const routes = express.Router();

routes.get("/jogadores", JogadoresController.listarTodos);
routes.post("/jogadores", JogadoresController.cadastrar);
routes.get("/jogadores/:id", JogadoresController.buscarPorId);
routes.put("/jogadores/:id", JogadoresController.atualizar);
routes.delete("/jogadores/:id", JogadoresController.excluir);

export default routes;