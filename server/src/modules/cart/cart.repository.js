import sequelize from 'sequelize';
import { Cart, Category, Product } from '../../models/index.js';
import BaseRepository from '../base/baseRepository.js';
import pkg from 'sequelize';
const { Op } = pkg;

class CartRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }

  async createCart(cartEntries) {
    const { product_id, quantity } = cartEntries;

    const isExist = await this.#model.findOne({
      where: {
        product_id,
      },
    });
    if (!isExist) {
      await this.#model.create(cartEntries);
    } else {
      await this.#model.increment('quantity', {
        by: quantity,
        where: { product_id },
      });
    }

    return;
  }

  async getCartByCustomer(customer_id) {
    return await this.#model.findAll({
      where: {
        customer_id,
      },
      include: {
        model: Product,
        as: 'product',
        attributes: ['title', 'image', 'price'],
      },
    });
  }

  async deleteCarts(cartIds) {
    return this.#model.destroy({
      where: {
        cart_id: {
          [Op.in]: cartIds
        },
      },
    });
  }
}

export default new CartRepository(Cart);
