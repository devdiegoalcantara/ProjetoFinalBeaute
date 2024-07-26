import express from "express";
import produtos from "./produtosRoutes.js";
import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Beauté Cosmétiques"});
  });

  app.use(
    express.json(),
    produtos,
    usuarios
  );
};

export default routes;