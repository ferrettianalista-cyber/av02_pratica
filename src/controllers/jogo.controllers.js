
import { jogosServices } from '../services/jogo.service.js';

class JogosController {
     async getall(_req, res)  {
  try {
    return res.json(await jogosServices.getall());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao buscar jogos.' });
  }
}

async getById (req, res)  {
  try {
    const jogos = await jogosServices.getById(req.params.id);
    if (!jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
    return res.json(jogo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao buscar jogo.' });
  }
}

async create (req, res) {
  try {
    return res.status(201).json(await jogosServices.create(req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao cadastrar jogo.' });
  }
}

async update(req, res)  {
  try {
    const jogos = await jogosServices.update(req.params.id, req.body);
    if (!jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
    return res.json(jogos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar jogo.' });
  }
}

 async delete (req, res)  {
  try {
    const jogos = await jogosServices.delete(req.params.id);
    if (!jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
    return res.json(jogos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir jogo.' });
  }
}

}

export const jogosController = new JogosController();

