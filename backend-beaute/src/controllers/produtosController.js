import NaoEncontrado from "../erros/NaoEncontrado.js";
import { usuarios, produtos } from "../models/index.js";

class ProdutosController {

  static listarProdutos = async (req, res, next) => {
    try {
      const buscaProdutos = produtos.find();

      req.resultado = buscaProdutos;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarProdutosPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const produtoResultado = await produtos.findById(id)
        .populate("title", "descrição")
        .exec();

      if (produtoResultado !== null) {
        res.status(200).send(produtoResultado);
      } else {
        next(new NaoEncontrado("Id do produto não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarProduto = async (req, res, next) => {
    try {
      let produto = new produtos(req.body);

      const produtoResultado = await produto.save();

      res.status(201).send(produtoResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarProduto = async (req, res, next) => {
    try {
      const id = req.params.id;
    
      const produtoResultado = await produtos.findByIdAndUpdate(id, {$set: req.body});

      if (produtoResultado !== null) {
        res.status(200).send({message: "Produto atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do produto não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirProduto = async (req, res, next) => {
    try {
      const id = req.params.id;

      const produtoResultado = await produtos.findByIdAndDelete(id);

      if (produtoResultado !== null) {
        res.status(200).send({message: "Produto removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do produto não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarProdutoPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const produtosResultado = produtos
          .find(busca)
          .populate("title");

        req.resultado = produtosResultado;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };
}

async function processaBusca(parametros) {
  const { title } = parametros;

  let busca = {};

  if (title) busca.title = { $regex: title, $options: "i" };

  return busca;
}

export default ProdutoController;