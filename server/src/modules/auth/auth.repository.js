import BaseRepository from '../base/baseRepository.js';
import { AdminUser, CustomerUser } from '../../models/index.js';


class AuthRepository extends BaseRepository {
  #adminUserModel;
  #customerUserModel;
  constructor(adminModel,customerModel) {
    super(adminModel);
    this.#adminUserModel = adminModel;
    this.#customerUserModel = customerModel;  
  }

  findAdmin = async(phone)=> {
    const user = await this.#adminUserModel.findOne({
      where: {
        phone,
      },
      raw: true
    });
    return user;
  };


  findCustomer = async(phone)=> {
    const user = await this.#customerUserModel.findOne({
      where: {
        phone,
      },
      raw: true
    });
    return user;
  };
  
}

export default new AuthRepository(AdminUser,CustomerUser);
