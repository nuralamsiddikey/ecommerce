import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError } from '../../utils/errors.js';
import responseHandler from '../../utils/responseHandler.js';
import CartService from './cart.service.js';
import {cartValidate} from './cart.validate.js'


class CartController {
  #cartService;

  constructor(cartService) {
    this.#cartService = cartService;
  }


  createCart = catchError(async (req, res, next) => {
    console.log(req.body)
    const { error, value } = cartValidate(req.body);
    if (error) {
      return next(new BadRequestError(error.message));
    }
    const data = await this.#cartService.createCart({...value,customer_id: req.user.customer_id});
    const resDoc = responseHandler(201, 'Cart created successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getCartByCustomer = catchError(async (req, res, next) => {
    const carts = await this.#cartService.getCartByCustomer(req.user.customer_id);
    const resDoc = responseHandler(200, 'Successfully fetched cart', carts);
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new CartController(CartService);
