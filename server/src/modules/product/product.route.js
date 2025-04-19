import { Router } from 'express';
import productController from './product.controller.js';
import { jwtAuth,jwtAuthAdmin,jwtAuthCustomer } from '../../middleware/auth/jwtAuth.js';
const productRouter = Router();

productRouter
  .post('/products',jwtAuthAdmin,productController.createProduct)
  .get('/products',productController.getProductList)
  .get('/products/:id',productController.getProductDetails)
  .put('/products/:id',productController.updateProduct)
  .delete('/products/:id',productController.deleteProduct)

export default productRouter;
