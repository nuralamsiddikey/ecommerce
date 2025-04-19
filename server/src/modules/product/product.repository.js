import sequelize from 'sequelize';
import { Category, Product } from '../../models/index.js';
import BaseRepository from '../base/baseRepository.js';
import pkg from 'sequelize';

const { Op } = pkg;

class ProductRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getProductList(reqQuery) {
    const { page, limit, order, search, category_id } = reqQuery;
    const paginationQuery = { page, limit, order };

    let whereQuery = {
      is_published: true
    };

    if (category_id) {
      whereQuery.category_id = {
        [Op.eq]: category_id,
      };
    }

    const attributes = { exclude: [] };

    const include = {
      model: Category,
      as: 'category',
      attributes: ['category_name'],
    };

    if (search) {
      whereQuery[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        sequelize.literal(`EXISTS (SELECT 1 FROM categories WHERE 
          categories.category_id = product.category_id AND 
          categories.category_name LIKE '%${search}%')`),
      ];
    }

    const products = await super.findByPaginationV2(
      paginationQuery,
      whereQuery,
      attributes,
      include
    );
    return products;
  }

  checkQuantity = async (product_id, quantity) => {
    const product = await this.#model.findOne({
      where: {
        product_id,
        stock_qty: {
          [Op.gte]: quantity,
        },
      },
      raw: true,
    });
    return product;
  };

  decrementStock = async (product_id, quantity, transaction) => {
    return await this.#model.decrement('stock_qty', {
      by: quantity,
      where: { product_id },
      transaction
    });
  };

  bulkDecrementStock = async (products) => {
    const decrementPromises = products.map(product => 
      this.#model.decrement('stock_qty', {
        by: product.quantity,
        where: { product_id: product.product_id }
      })
    );
    
    await Promise.all(decrementPromises);
    return
  }

  
  getProductDetails = async (productId) => {  
    const attributes = { exclude: [] };

    const include = {
      model: Category,
      as: 'category',
      attributes: ['category_name'],
    };

    const product = await this.#model.findOne({
      where: { product_id: productId },
      attributes,
      include,
    });

    return product;
  }
}

export default new ProductRepository(Product);
