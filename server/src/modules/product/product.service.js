import qrcode from 'qrcode';
import pkg from 'sequelize';
import {
  NotFoundError,
  GeneralError,
  BadRequestError,
} from '../../utils/errors.js';
import slugify from '../../utils/slugify.js';
import BaseService from '../base/baseService.js';
import ProductRepository from './product.repository.js';

const { Op } = pkg;
class ProductService extends BaseService {
  #productRepository;
  #serviceName;

  constructor(productRepository, serviceName) {
    super(productRepository, serviceName);
    this.#productRepository = productRepository;

    this.#serviceName = serviceName;
  }

  createProduct = async (productEntries) => {
    return await super.create(productEntries);
  };
  getProductList = async (reqQuery) =>
    await this.#productRepository.getProductList(reqQuery);

  getProductDetails = async (productId) => {
    const product = await this.#productRepository.getProductDetails(productId);
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    return product;
  };

}

export default new ProductService(ProductRepository, 'product');
