import express from 'express';
import bcrypt from 'bcrypt';
import usuarios from '../models/Usuarios.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await usuarios.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    const match = await bcrypt.compare(senha, usuario.senha);

    if (match) {
      const nome = usuario.nome.split(' ')[0];
      res.json({ message: `Olá! Que bom que você voltou ${nome}.` });
    } else {
      res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar realizar login. Por favor, tente novamente mais tarde.' });
  }
});

export default router;
