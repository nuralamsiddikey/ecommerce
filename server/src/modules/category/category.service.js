import BaseService from '../base/baseService.js';
import CategoryRepository from './category.repository.js';
import slugify from '../../utils/slugify.js';
import database from '../../db/dbConnect.js';

import pkg from 'sequelize';
const { Op } = pkg;

class CategoryService extends BaseService {
  #categoryRepository;
  #serviceName;
  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#categoryRepository = repository;
    this.#serviceName = serviceName;
  }
  
  async createCategory(reqBody, user) {
    const { category_name } = reqBody;
    const category_slug = slugify(category_name);
    const newCategory = await super.create({ ...reqBody, category_slug });
    return newCategory;
  }



  async getAllCategories() {
    return await this.#categoryRepository.getAllCategories();
  }
}

export default new CategoryService(CategoryRepository, 'category');
