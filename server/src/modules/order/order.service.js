import sequelize from 'sequelize';
import { BadRequestError } from '../../utils/errors.js';
import { generateOrderNo } from '../../utils/generateOrderNo.js';
import BaseService from '../base/baseService.js';
import productRepository from '../product/product.repository.js';
import cartRepository from '../cart/cart.repository.js';
import orderRepository from './order.repository.js';
import db from '../../db/dbConnect.js';

class OrderService extends BaseService {
  #orderRepository;
  #productRepository;
  #cartRepository
  #serviceName;

  constructor(repository, cartRepository,serviceName) {
    super(repository, productRepository, serviceName);
    this.#orderRepository = repository;
    this.#productRepository = productRepository;
    this.#cartRepository = cartRepository
    this.#serviceName = serviceName;
  }

  async createOrder(orderEntries) {
    const transaction = await db.sequelize.transaction();

    try {
      const { product_id, quantity } = orderEntries;
      const result = await this.#productRepository.checkQuantity(
        product_id,
        quantity
      );

      if (!result) {
        throw new BadRequestError('Product not available');
      }

      await super.create(
        {
          ...orderEntries,
          order_no: generateOrderNo(),
        },
        { transaction }
      );

      await this.#productRepository.decrementStock(
        product_id,
        quantity,
        transaction
      );

      await transaction.commit();

      return;
    } catch (error) {
      await transaction.rollback();
      throw new BadRequestError(error.message);
    }
  }

  async createCartOrder(orderEntries, customer_id) {
   
    const order = [];
    const cartIds = [];
    const products = [];

    orderEntries.data.map((item) => {
      order.push({
        full_name: item.full_name,
        phone: item.phone,
        division: item.division,
        city: item.city,
        police_station: item.police_station,
        product_id: item.product_id,
        quantity: item.quantity,
      });
    });

    orderEntries.data.map((item) => {
      cartIds.push(item.cart_id);
    });

    orderEntries.data.map((item) => {
      products.push({
        product_id: item.product_id,
        quantity: item.quantity,
      });
    });

    await this.#orderRepository.createCartOrder(order)
    await this.#cartRepository.deleteCarts(cartIds)

    

  }

  async getAllOrder(reqQuery) {
    return await this.#orderRepository.getAllOrder(reqQuery);
  }
}

export default new OrderService(orderRepository, productRepository, cartRepository,'order');
