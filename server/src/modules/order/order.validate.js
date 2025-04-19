import Joi from 'joi';

const orderValidationSchema = Joi.object({
  product_id: Joi.number().integer().required(),
  full_name: Joi.string().required(),
  phone: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  division: Joi.string().required(),
  city: Joi.string().required(),
  police_station: Joi.string().required(),
  address_line: Joi.string().required(),
});

export const orderValidate = (value) => orderValidationSchema.validate(value);

const orderQuerySchema = Joi.object({
  page: Joi.number()
    .integer()
    .min(1)
    .optional()
    .description('Page number, must be an integer greater than or equal to 1'),

  limit: Joi.number()
    .integer()
    .min(1)
    .optional()
    .description(
      'Number of items per page, must be an integer greater than or equal to 1'
    ),

  order: Joi.string()
    .valid('asc', 'desc')
    .optional()
    .description("Order of sorting, can be 'asc' or 'desc'"),
  status: Joi.alternatives().try(
    Joi.string().valid('all'),
    Joi.number().integer()
  ),
});

export const orderQueryValidate = (value) => orderQuerySchema.validate(value);

const previousOrdersSchema = Joi.object({
  page: Joi.number().integer().min(1).optional(),

  limit: Joi.number().integer().min(1).optional(),

  order: Joi.string().valid('asc', 'desc').optional(),

  order_id: Joi.number().integer().positive(),
  customer_id: Joi.number().integer().positive(),
});

export const previousOrdersValidate = (value) =>
  previousOrdersSchema.validate(value);

const orderCanceledSchema = Joi.object({
  order_cancel_reason_id: Joi.number().integer().positive().required(),
  reason_name: Joi.string().required(),
  comment: Joi.string().allow(''),
});

export const orderCanceledValidate = (value) =>
  orderCanceledSchema.validate(value);

const customerOrderSchema = Joi.object({
  page: Joi.number().integer().min(1).optional(),

  limit: Joi.number().integer().min(1).optional(),

  order: Joi.string().valid('asc', 'desc').optional(),

  status: Joi.alternatives()
    .try(Joi.number().integer(), Joi.string().valid('all'))
    .optional(),
});

export const customerOrderValidate = (value) => {
  return customerOrderSchema.validate(value);
};

export const deliveryAddressSchema = Joi.object({
  order_id: Joi.number().integer(),
  full_name: Joi.string().required(),
  phone: Joi.string().required(),
  address_line: Joi.string().required(),
  division: Joi.string().required(),
  city: Joi.string().required(),
  police_station: Joi.string().required(),
});

export const deliveryAddressValidate = (value) =>
  deliveryAddressSchema.validate(value);

const addNewItemsSchema = Joi.object({
  order_id: Joi.number().integer(),
  cart_ids: Joi.array()
    .items(Joi.number().integer().positive().required())
    .min(1)
    .required(),
});

export const addNewItemsValidate = (value) => addNewItemsSchema.validate(value);

const deleteOrderItemSchema = Joi.object({
  order_id: Joi.number().integer().required(),
  order_line_id: Joi.number().integer().required(),
  size_id: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().required(),
  discount_price: Joi.number().required(),
  total_price: Joi.number().required(),
});

export const deleteOrderItemValidate = (value) =>
  deleteOrderItemSchema.validate(value);

const updateOrderItemSchema = Joi.object({
  order_id: Joi.number().integer().required(),
  order_line_id: Joi.number().integer().required(),
  color_id: Joi.number().integer().required(),
  color_name: Joi.string().required(),
  size_id: Joi.number().integer().required(),
  size_name: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  delivery_charge: Joi.number().required(),
  product_id: Joi.number().integer().required(),
});

export const updateOrderItemValidate = (value) =>
  updateOrderItemSchema.validate(value);

const searchOrderQuerySchema = Joi.object({
  page: Joi.number()
    .integer()
    .min(1)
    .optional()
    .description('Page number, must be an integer greater than or equal to 1'),

  limit: Joi.number()
    .integer()
    .min(1)
    .optional()
    .description(
      'Number of items per page, must be an integer greater than or equal to 1'
    ),

  order: Joi.string()
    .valid('asc', 'desc')
    .optional()
    .description("Order of sorting, can be 'asc' or 'desc'"),

  query: Joi.string().required(),
});

export const searchOrderQueryValidate = (value) =>
  searchOrderQuerySchema.validate(value);

const liveOrderSchema = Joi.object({
  is_live: Joi.boolean().required(),
});

export const liveOrderValidate = (value) => liveOrderSchema.validate(value);
