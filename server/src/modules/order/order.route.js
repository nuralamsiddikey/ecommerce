import { Router } from 'express';
import orderController from './order.controller.js';
import { jwtAuth ,jwtAuthCustomer} from '../../middleware/auth/jwtAuth.js';
const orderRouter = Router();


orderRouter
  .post('/orders',jwtAuthCustomer ,orderController.createOrder)
  .post('/orders/carts',jwtAuthCustomer ,orderController.createCartOrder)
  .get('/orders', jwtAuthCustomer,orderController.getAllOrder)

export default orderRouter;
 