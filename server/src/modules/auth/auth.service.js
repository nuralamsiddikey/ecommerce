import bcrypt from 'bcrypt';

import { UnauthorizedError } from '../../utils/errors.js';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  verifyAccessToken,
} from '../../utils/jwt.js';
import BaseService from '../base/baseService.js';
import authRepository from './auth.repository.js';

class AuthService extends BaseService {
  #authRepository;
  constructor(authRepository, serviceName) {
    super(authRepository, serviceName);
    this.#authRepository = authRepository;
  }

  async adminSignIn(value) {
    const { phone: adminPhone, password: inputPass } = value;
    let user;
    user = await this.#authRepository.findAdmin(adminPhone);
    if (!user) throw new UnauthorizedError('unauthorized');

    const { admin_id, full_name, phone, password } = user;

    const isPassMatch = await bcrypt.compare(inputPass, password);
    if (!isPassMatch) throw new UnauthorizedError('unauthorized');
    const accessToken = generateAccessToken({
      user: { admin_id, phone },
    });

    const refreshToken = generateRefreshToken({
      user: { admin_id, phone },
    });
    const userRes = { admin_id, full_name, phone };
    return {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
      user: userRes,
    };
  }

  async customerSignIn(value) {
    const { phone: customerPhone, password: inputPass } = value;
    let user;
    user = await this.#authRepository.findCustomer(customerPhone);
    if (!user) throw new UnauthorizedError('unauthorized');

    const { customer_id, full_name, phone, password } = user;

    const isPassMatch = await bcrypt.compare(inputPass, password);
    if (!isPassMatch) throw new UnauthorizedError('unauthorized');
    const accessToken = generateAccessToken({
      user: { customer_id, phone },
    });

    const refreshToken = generateRefreshToken({
      user: { customer_id, phone },
    });
    const userRes = { customer_id, full_name, phone };
    return {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
      user: userRes,
    };
  }
}

export default new AuthService(authRepository, 'auth');
