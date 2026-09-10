import express from "express";
import horarios from "./HorarioRoutes.js";
import jogadores from "./JogadoresRoutes.js";
import times from "./TimesRoutes.js";
import sorteio from "./SorteioRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), horarios, jogadores, times, sorteio);
};

export default routes;
