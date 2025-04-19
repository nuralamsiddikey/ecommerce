import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError } from '../../utils/errors.js';
import responseHandler from '../../utils/responseHandler.js';
import adminUserService from './admin.user.service.js';
import {
  adminUserValidate,
} from './admin.user.validate.js';

class AdminController {
  #adminUserService;
  constructor(adminUserService) {
    this.#adminUserService = adminUserService;
  }

  createAdmin = catchError(async (req, res, next) => {
    const { error, value } = adminUserValidate(req.body );
    if (error) {
      throw new BadRequestError(error.message);
    }
    const data = await this.#adminUserService.createAdmin(value);
    const resDoc = responseHandler(201, 'Successfully created admin', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getAdmin = catchError(async (req, res, next) => {
    const { id } = req.params;
    const admin = await this.#adminUserService.getAdmin(id);
    const resDoc = responseHandler(200, 'admin get successfully', admin);
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new AdminController(adminUserService);
