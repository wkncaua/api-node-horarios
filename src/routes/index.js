import express from "express";
import horarios from "./HorarioRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), horarios);
};

export default routes;
