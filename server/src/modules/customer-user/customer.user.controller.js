import responseHandler from '../../utils/responseHandler.js';
import catchError from '../../middleware/errors/catchError.js';
import { GeneralError, BadRequestError } from '../../utils/errors.js';
import {
  customerValidate,
  validateCustomerSignin
} from './customer.user.validate.js';
import customerUserService from './customer.user.service.js';


class CustomerUserController {
  #customerUserService;
  constructor(customerUserService) {
    this.#customerUserService = customerUserService;
  }

  createCustomer = catchError(async (req, res, next) => {
    const { error, value: customer } = customerValidate(req.body);

    if (error) {
      throw new BadRequestError(error.message);
    }
    await this.#customerUserService.createCustomer(customer);
    const resDoc = responseHandler(200, 'Customer created successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });

  getCustomerProfile = catchError(async (req, res, next) => {
     const customer =  await this.#customerUserService.getCustomerProfile(req.user.customer_id);
    const resDoc = responseHandler(200, 'Customer fetched successfully',customer);
    res.status(resDoc.statusCode).json(resDoc);
  });


 
  customerUserSignIn = catchError(async (req, res, next) => {
    const { error, value: customer } = validateCustomerSignin(req.body);
     
    if (error) {
      throw new BadRequestError(error.message);
    }
   const data = await this.#customerUserService.customerUserSignIn(customer);
    const resDoc = responseHandler(200, 'Customer Signed In successfully',data);
    res.status(resDoc.statusCode).json(resDoc);
  });


  updateCustomerInfo = catchError(async (req, res, next) => {
    const { error, value } = validateCustomerInfo(req.body);
    if (error) {
      throw new BadRequestError(error.message);
    }

    const data = await this.#customerUserService.updateCustomerInfo(
      req.user.customer_id,
      value
    );

    const resDoc = responseHandler(
      200,
      'Customer information updated successfully'
    );
    res.status(resDoc.statusCode).json(resDoc);
  });


  updateCustomerImage = catchError(async (req, res, next) => {
    const { customer_id } = req.user;
    const { photo } = req.body;
    const data = await this.#customerUserService.updateCustomerImage(
      customer_id,
      photo
    );

    const resDoc = responseHandler(200, 'Customer photo updated successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new CustomerUserController(customerUserService);
