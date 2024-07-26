import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {
      type: String,
      required: [true, "O título do produto é obrigatório"]
    },
    subtitle:{
      type: String,
      required: [true, "O subtitulo é obrigatório"]
    },
    description:{
      type: String,
      required: [true, "A descrição é obrigatória"]
    },
    price:{
      type: String,
      required: [true, "O preço é obrigatório"]
    },
    parcela:{
      type: String,
      required: [true, "A parcela é obrigatória"]
    },
    gender:{
      type: String,
      required: [true, "O genêro é obrigatório"]
    },
    imgSrc:{
      type: String,
      required: [true, "O caminho da imagem é obrigatório"]
    },
    alt:{
      type: String,
      required: [true, "A legenda alternativa da imagem é obrigatória"]
    },
  }
);

const produtos= mongoose.model("produtos", produtoSchema);

export default produtos;
