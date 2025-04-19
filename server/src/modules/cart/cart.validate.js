import Joi from 'joi';

export const cartSchema = Joi.object({
  product_id: Joi.number().integer().required().positive().messages({
    'number.base': '"product_id" must be a number',
    'number.integer': '"product_id" must be an integer',
    'any.required': '"product_id" is a required field',
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    'number.base': '"quantity" must be a number',
    'number.integer': '"quantity" must be an integer',
    'number.min': '"quantity" must be at least 1',
    'any.required': '"quantity" is a required field',
  }),
});

export const cartValidate = (value) => cartSchema.validate(value);
