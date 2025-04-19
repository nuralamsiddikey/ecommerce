import pkg from 'sequelize';
const { Op } = pkg;
import BaseRepository from '../base/baseRepository.js';
import { AdminUser } from '../../models/index.js';
import sequelize from 'sequelize';

class AdminRepository extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }


  async getAdmin(id) {
    const admin = await this.#model.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return admin;
  }

 
}

export default new AdminRepository(AdminUser);
