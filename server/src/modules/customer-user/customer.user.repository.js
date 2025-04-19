import BaseRepository from '../base/baseRepository.js';
import { CustomerUser } from '../../models/index.js';
import pkg from 'sequelize';
const { Op } = pkg;

class CustomerUserRepository extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }

  async searchCustomer(reqQuery) {
    const { page, limit, order, query } = reqQuery;
    const paginationQuery = { page, limit, order };
    const whereQuery = {
      ...(query && {
        [Op.or]: [
          { full_name: { [Op.substring]: `${query}` } },
          { phone: { [Op.substring]: `${query}` } },
          { email: { [Op.substring]: `${query}` } },
        ],
      }),
    };

    const attributes = ['customer_id', 'full_name', 'phone', 'created_at'];

    const include = [
      {
        model: CustomerUserAddressLine,
        as: 'address',
        required: false,
        where: { is_primary: 1 },
        attributes: [
          'division_name',
          'city_name',
          'police_station_name',
          'address_line',
        ],
      },
      {
        model: CustomerUserRating,
        as: 'rating',
        attributes: ['order_total_amount', 'total_order'],
      },
    ];

    const customers = await super.findByPaginationV2(
      paginationQuery,
      whereQuery,
      attributes,
      include
    );
    const copiedCustomers = [...customers.result];

    const modifiedCustomers = copiedCustomers?.map((customer) => {
      if (Array.isArray(customer.address)) {
        customer.address = customer.address[0] || null;
      }
      if (Array.isArray(customer.rating)) {
        customer.rating = customer.rating[0] || null;
      }
      return customer;
    });

    customers.result = modifiedCustomers;
    return customers;
  }

  async getCustomerProfile(customerId) {
    return await this.#model.findOne({
      attributes: {
        exclude: ['password'],
      },
      where: {
        customer_id: customerId,
      },
    });
  }

  findCustomer = async (phone) => {
    return await this.#model.findOne({
      where: {
        phone,
      },
      raw: true,
    });
  };
}

export default new CustomerUserRepository(CustomerUser);
