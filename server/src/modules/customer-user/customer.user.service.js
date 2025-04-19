import BaseService from '../base/baseService.js';
import customerUserRepository from './customer.user.repository.js';
import { generateHashedPass } from '../../utils/password.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/jwt.js';
import bcrypt from 'bcrypt';
import { ConflictError, UnauthorizedError } from '../../utils/errors.js';

class CustomerUserService extends BaseService {
  #customerUserRepository;

  constructor(customerUserRepository, cartRepository, customerUserServiceName) {
    super(customerUserRepository, customerUserServiceName);
    this.#customerUserRepository = customerUserRepository;
  }

  createCustomer = async (customerEntries) => {
    const { full_name, phone, password, email, address_line } = customerEntries;

    const isExist = await this.#customerUserRepository.findCustomer(
      phone,
    );

    if (isExist) {
      throw new ConflictError('phone are already use');
    }

    const hashedPass = await generateHashedPass(password);

    const userObj = {
      full_name,
      email,
      phone,
      password: hashedPass,
      address_line,
    };
    const newUser = await super.create(userObj);
    const userRes = { ...newUser.dataValues };
    delete userRes.password;
    return userRes;
  };

  async customerUserSignIn(customer) {
    const { phone, password } = customer;

    let user = await this.#customerUserRepository.findCustomer(phone);
    if (!user) throw new UnauthorizedError('unauthorized');

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) throw new UnauthorizedError('unauthorized');

    const accessToken = generateAccessToken({
      user: { customer_id: user.customer_id, phone: user.phone },
    });

    const refreshToken = generateRefreshToken({
      user: { customer_id: user.customer_id, phone: user.phone },
    });

    const customerRes = {
      full_name: user.full_name,
      customer_id: user.customer_id,
    };

    return {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
      user: customerRes,
    };
  }

  async updateCustomerInfo(customerId, customerInfo) {
    const { full_name, phone, email } = customerInfo;
    

    const customer = {
      full_name,
      phone,
    };
    if (email) {
      customer.email = email;
    } else {
      customer.email = null;
    }

  

    const updatedInfo = await super.updateById(
      { customer_id: customerId },
      customer
    );
   

    return updatedInfo;
  }

  async getCustomerProfile(customerId) {
    return await this.#customerUserRepository.getCustomerProfile(customerId);
  }

  async updateCustomerImage(customerId, photo) {
    const updatedInfo = await await this.#customerUserRepository.updateOne(
      { customer_id: customerId },
      { photo }
    );
    return updatedInfo;
  }
}

export default new CustomerUserService(
  customerUserRepository,
  'customer user'
);
