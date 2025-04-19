import { Router } from 'express';
import cartController from './cart.controller.js';
import { jwtAuthCustomer } from '../../middleware/auth/jwtAuth.js';
const cartRouter = Router();

cartRouter
  .post('/carts', jwtAuthCustomer, cartController.createCart)
  .get('/carts', jwtAuthCustomer, cartController.getCartByCustomer);

export default cartRouter;
