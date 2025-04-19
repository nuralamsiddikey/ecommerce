import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError, NotFoundError } from '../../utils/errors.js';
import responseHandler from '../../utils/responseHandler.js';
import orderService from './order.service.js';
import { orderQueryValidate, orderValidate } from './order.validate.js';

class OrderController {
  #orderService;

  constructor(orderService) {
    this.#orderService = orderService;
  }

  createOrder = catchError(async (req, res, next) => {
    const { error, value } = orderValidate(req.body);
    if (error) {
      throw new BadRequestError(error.message);
    }
    const data = await this.#orderService.createOrder({...value,customer_id: req.user.customer_id});
    const resDoc = responseHandler(201, 'Successfully created order', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

 
  createCartOrder = catchError(async (req, res, next) => {
   const data = await this.#orderService.createCartOrder(req.body,req.user.customer_id);
   const resDoc = responseHandler(201, 'Successfully created order', data);
   res.status(resDoc.statusCode).json(resDoc);
  });





  getAllOrder = catchError(async (req, res, next) => {
    const { error, value: reqQuery } = orderQueryValidate(req.query);
    if (error) {
      throw new BadRequestError(error.message);
    }
    const orders = await this.#orderService.getAllOrder({...reqQuery,customer_id: req.user.customer_id});
    const resDoc = responseHandler(200, 'Successfully fetched orders', orders);
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new OrderController(orderService);
