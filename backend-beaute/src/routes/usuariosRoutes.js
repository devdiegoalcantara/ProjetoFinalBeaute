import express from "express";
import UsuarioController from "../controllers/usuariosController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/usuarios", UsuarioController.listarUsuarios, paginar)
  .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
  .post("/usuarios", UsuarioController.cadastrarUsuario)
  .put("/usuarios/:id", UsuarioController.atualizarUsuario)
  .delete("/usuarios/:id", UsuarioController.excluirUsuario);

export default router;   