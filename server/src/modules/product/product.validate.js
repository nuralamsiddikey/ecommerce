import Joi from 'joi';

const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('').required(),
  price: Joi.number().required(),
  category_id: Joi.number().integer().required(),
  stock_qty: Joi.number().integer().default(0),
  is_published: Joi.boolean().default(true),
  image: Joi.string().allow('').required(),
});

export const productValidate = (value) => {
  return productSchema.validate(value);
};



const productQuerySchema = Joi.object({
  page: Joi.number().integer().default(1),
  limit: Joi.number().integer().default(20),
  search: Joi.string().allow(''),
  category_id: Joi.number().integer(),
  sort_by: Joi.string()
    .valid('product_id', 'title', 'price', 'created_at')
    .default('product_id'),
  order_by: Joi.string()
    .valid('asc', 'desc')
    .default('asc'),
});

export const productQueryValidate = (value) => {
  return productQuerySchema.validate(value);
};
