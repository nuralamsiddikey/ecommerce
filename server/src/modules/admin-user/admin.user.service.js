import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '../../utils/errors.js';
import BaseService from '../base/baseService.js';
import adminRepository from './admin.user.repository.js';

import { generateHashedPass } from '../../utils/password.js';

class AdminService extends BaseService {
  #adminUserRepository;
  #serviceName;
  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#adminUserRepository = repository;
    this.#serviceName = serviceName;
  }
  async createAdmin(adminUser, user) {
    const { full_name, phone, password, email } = adminUser;

    const isExist = await this.#adminUserRepository.findEmailOrPhone(
      phone,
      email
    );

    if (isExist) {
      if (
        isExist.dataValues.email === email &&
        isExist.dataValues.phone === phone
      ) {
        throw new ConflictError('email and phone are already use');
      } else if (isExist.dataValues.email === email) {
        throw new ConflictError('email are already use');
      } else if (isExist.dataValues.phone === phone) {
        throw new ConflictError('phone are already use');
      }
    }

    const hashedPass = await generateHashedPass(password);

    const userObj = {
      full_name,
      email,
      phone,
      password: hashedPass,
    };
    const newUser = await super.create(userObj);
    const userRes = { ...newUser.dataValues };
    delete userRes.password;
    return userRes;
  }

  async getAdmin(id) {
    const admin = await this.#adminUserRepository.getAdmin(id);
    if (!admin) throw new NotFoundError(`${this.#serviceName} not found`);
    return admin;
  }
}

export default new AdminService(adminRepository, 'admin');
