import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError } from '../../utils/errors.js';

import responseHandler from '../../utils/responseHandler.js';
import ProductService from './product.service.js';
import database from '../../db/dbConnect.js';

import { productQueryValidate, productValidate } from './product.validate.js';

class ProductController {
  #productService;

  constructor(productService) {
    this.#productService = productService;
  }

  createProduct = catchError(async (req, res, next) => {
    const { error, value } = productValidate(req.body);
    if (error) {
      throw new BadRequestError(error.message);
    }

    const data = await this.#productService.createProduct(value);
    const resDoc = responseHandler(201, 'Product created successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getProductList = catchError(async (req, res, next) => {
    const { error, value } = productQueryValidate(req.query);
    if (error) {
      throw new BadRequestError(error.message);
    }
    const products = await this.#productService.getProductList(value);

    const resDoc = responseHandler(
      200,
      'Successfully fetched products',
      products
    );
    res.status(resDoc.statusCode).json(resDoc);
  });

  updateProduct = catchError(async (req, res, next) => {
    const { error, value } = productValidate(req.body);
    if (error) {
      throw new BadRequestError(error.message);
    }

    const products = await this.#productService.updateProduct(
      value,
      req.params.id
    );
   
    if (products[0] === 0) {
      throw new BadRequestError('Product not found');
    }

    const resDoc = responseHandler(
      200,
      'Successfully fetched products',
      products
    );
    res.status(resDoc.statusCode).json(resDoc);
  });

  deleteProduct = catchError(async (req, res, next) => {
    const products = await this.#productService.deleteProduct(req.params.id);

    const resDoc = responseHandler(200, 'Successfully deleted products');
    res.status(resDoc.statusCode).json(resDoc);
  });


  getProductDetails = catchError(async (req, res, next) => {
    const product = await this.#productService.getProductDetails(req.params.id);

    const resDoc = responseHandler(200, 'Successfully fetched product',product);
    res.status(resDoc.statusCode).json(resDoc);
  });




  
}

export default new ProductController(ProductService);
