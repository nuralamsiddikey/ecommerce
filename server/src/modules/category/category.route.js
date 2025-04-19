import { Router } from 'express';
import categoryController from '../../modules/category/category.controller.js';
import { jwtAuth } from '../../middleware/auth/jwtAuth.js';
const categoryRouter = Router();

categoryRouter
  .post('/categories', categoryController.createCategory)
  .get('/categories', categoryController.getAllCategories)
  

export default categoryRouter;
