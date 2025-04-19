import { BadRequestError, NotFoundError } from '../../utils/errors.js';
import BaseService from '../base/baseService.js';
import CartRepository from './cart.repository.js';

class CartService extends BaseService {
  #cartRepository;
  #sizeRepository;
  #serviceName;
  constructor(repository, sizeRepository, serviceName) {
    super(repository, serviceName);
    this.#cartRepository = repository;
    this.#sizeRepository = sizeRepository;
    this.#serviceName = serviceName;
  }


  async createCart(cartEntries) {
    const newCart = await this.#cartRepository.createCart(cartEntries);
    return newCart;
  }

  async getCartByCustomer(customer_id) {
    const carts = await this.#cartRepository.getCartByCustomer(customer_id);
    if (carts.length === 0) {
      throw new NotFoundError('Did not found carts');
    }
    return carts;
  }
}

export default new CartService(
  CartRepository,
  'cart'
);
 