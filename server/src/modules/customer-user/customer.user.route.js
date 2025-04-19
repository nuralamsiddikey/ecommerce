import { Router } from 'express';
import customerUserController from '../../modules/customer-user/customer.user.controller.js';
import { jwtAuth } from '../../middleware/auth/jwtAuth.js';

const customerUserRoute = Router();

customerUserRoute.post('/customers', customerUserController.createCustomer);

customerUserRoute.post(
  '/customers/signin',
  customerUserController.customerUserSignIn
);

customerUserRoute.get(
  '/customers/profile',
  jwtAuth,
  customerUserController.getCustomerProfile
);

customerUserRoute.put(
  '/customers',
  jwtAuth,
  customerUserController.updateCustomerInfo
);

export default customerUserRoute;
