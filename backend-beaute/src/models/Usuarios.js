import mongoose from 'mongoose';
import hashPassword from '../middlewares/passwordEncrypt.js';

const usuarioSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: [true, "O nome do(a) usuário(a) é obrigatório"]
    },
    email: {
      type: String,
      required: [true, "O e-mail é obrigatório"]
    },
    rg: {
      type: String,
      required: [true, "O RG é obrigatório"]
    },
    cpf: {
      type: String, 
      required: [true, "O CPF é obrigatório"]
    },
    dataNascimento: {
      type: String,
      required: [true, "A data de nascimento é obrigatória"]
    },
    senha: {
      type: String,
      required: [true, "A senha é obrigatória"]
    },
  },
  {
    versionKey: false
  }
);

usuarioSchema.pre('save', hashPassword);

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
