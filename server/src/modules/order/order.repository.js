import sequelize from 'sequelize';
import { Order, Product } from '../../models/index.js';
import BaseRepository from '../base/baseRepository.js';

import pkg from 'sequelize';
const { Op } = pkg;

class OrderRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }

  async createOrder(orderEntries, transaction) {
    return await this.#model.create(orderEntries, { transaction });
  }

  async createCartOrder(order){
    return this.#model.bulkCreate(order)
  }

  async getAllOrder(reqQuery) {
    const { page, limit, order, status,customer_id } = reqQuery;
    const paginationQuery = { page, limit, order };
    let whereQuery = {
      customer_id
    };

    const attributes = { exclude: [] };

    const orders = await super.findByPaginationV2(
      paginationQuery,
      whereQuery,
      attributes
    );

    return orders;
  }
}

export default new OrderRepository(Order);
