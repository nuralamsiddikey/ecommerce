import { default as pkg, default as sequelize } from 'sequelize';
import database from '../../db/dbConnect.js';
import { Category } from '../../models/index.js';
import pagination from '../../utils/pagination.js';
import BaseRepository from '../base/baseRepository.js';
const { Op } = pkg;

class CategoryRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getAllCategories() {
    const whereQuery = {
      is_active: true,
    };

    const categories = await this.#model.findAll({
      where: whereQuery,
    });

    return categories;
  }
}

export default new CategoryRepository(Category);
