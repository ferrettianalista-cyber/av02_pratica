
import { jogosRepository } from "../repositories/jogo.repository.js";


class JogosService {
  async getall() {
    return jogosRepository.getall()
  }

  async getById(id) {
    return jogosRepository.getById(id)
  }

  async create({ id, titulo , plataforma, preco, data_lancamento }) {
   return  jogosRepository.create()
  }

  async update(id, dados) {
   
    return jogosRepository.update
  }

  async delete(id) {
   
    return jogosRepository.delete
  }
}

export const jogosServices = new JogosService();
