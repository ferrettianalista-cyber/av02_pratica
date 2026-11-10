
import { knex } from '../database/knex.js';

class JogosRepository {
  async getall() {
    return knex('jogos').select('*');
  }

  async getById(id) {
    return knex('jogos').where({ id }).first();
  }

  async create({ id, titulo ,plataforma ,preco, data_lancamento}) {
    const [jogos] = await knex('jogos')
    
      .returning('*');
    return jogos;
  }

  async update(id, dados) {
    const [jogos] = await knex('jogos').where({ id }).update(dados).returning('*');
    return jogos;
  }

  async delete(id) {
    const [jogos] = await knex('jogos').where({ id }).delete().returning('*');
    return jogos;
  }
}

export const jogosRepository = new JogosRepository();
