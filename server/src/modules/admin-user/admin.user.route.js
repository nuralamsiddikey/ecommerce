import { Router } from 'express';
import adminUserController from './admin.user.controller.js';

const adminUserRoute = Router();



adminUserRoute
  .post('/admins', adminUserController.createAdmin)
  .get('/admins/:id',adminUserController.getAdmin)
  
  

export default adminUserRoute;
