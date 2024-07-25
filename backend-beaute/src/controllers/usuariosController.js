import NaoEncontrado from "../erros/NaoEncontrado.js";
import { usuarios } from "../models/index.js";

class UsuarioController {
  static listarUsuarios = async (req, res, next) => {
    try {
      const usuariosResultado = usuarios.find();

      req.resultado = usuariosResultado;

      next();
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarUsuarioPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const usuarioResultado = await usuarios.findById(id);

      if (usuarioResultado !== null) {
        res.status(200).send(usuarioResultado);
      } else {
        next(new NaoEncontrado("Id do Usuário não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarUsuario = async (req, res, next) => {
    try {
      let usuario = new usuarios(req.body);

      const usuarioResultado = await usuario.save();

      res.status(201).send(usuarioResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarUsuario = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const usuarioResultado = await usuarios.findByIdAndUpdate(id, {$set: req.body});

      if (usuarioResultado !== null) {
        res.status(200).send({message: "Usuário atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Usuário não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static excluirUsuario = async (req, res, next) => {
    try {
      const id = req.params.id;

      const usuarioResultado = await usuarios.findByIdAndDelete(id);


      if (usuarioResultado !== null) {
        res.status(200).send({message: "Usuário removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Usuário não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default UsuarioController;