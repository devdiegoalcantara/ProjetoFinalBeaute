import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) usuário(a) é obrigatório"]
    },
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);

const usuarios = mongoose.model("usuários", usuarioSchema);

export default usuarios;