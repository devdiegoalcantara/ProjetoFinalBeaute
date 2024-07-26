import express from "express";
import ProdutoController from "../controllers/produtosController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/produtos", ProdutoController.listarProdutos, paginar)
  .get("/produtos/busca", ProdutoController.listarProdutoPorFiltro, paginar)
  .get("/produtos/:id", ProdutoController.listarProdutosPorId)
  .post("/produtos", ProdutoController.cadastrarProduto)
  .put("/produtos/:id", ProdutoController.atualizarProduto)
  .delete("/produtos/:id", ProdutoController.excluirProduto);

export default router;   