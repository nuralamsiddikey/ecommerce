import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError } from '../../utils/errors.js';
import responseHandler from '../../utils/responseHandler.js';
import authService from './auth.service.js';
import { authValidate } from './auth.validate.js';

class AuthController {
  #authService;
  constructor(authService) {
    this.#authService = authService;
  }

  adminSignIn = catchError(async (req, res, next) => {
    const { error, value } = authValidate(req.body);
    if (error) {
      if (error) {
        throw new BadRequestError(error.message);
      }
    }
    const data = await this.#authService.adminSignIn(value);
    const resDoc = responseHandler(200, 'Signedin successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  customerSignIn = catchError(async (req, res, next) => {
    const { error, value } = authValidate(req.body);
    if (error) {
      if (error) {
        throw new BadRequestError(error.message);
      }
    }
    const data = await this.#authService.customerSignIn(value);
    const resDoc = responseHandler(200, 'Signedin successfully', data);
    res.status(resDoc.statusCode).json(resDoc);


  });
}

export default new AuthController(authService);
