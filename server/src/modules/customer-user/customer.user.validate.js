import Joi from 'joi';

const customerSchema = Joi.object({
  full_name: Joi.string().optional(),
  phone: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.empty': 'Phone number is required.',
      'string.pattern.base':
        'Phone number must start with a valid Bangladeshi operator code and be 11 digits long.',
      'any.required': 'Phone number is required.',
    }),
  password: Joi.string().required(),
  address_line: Joi.string().allow('').optional(),
});

export const customerValidate = (value) => {
  return customerSchema.validate(value);
};

const ustomerSignInSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9][0-9]{8}$/)
    .required(),
  password: Joi.string().required(),
});

export const validateCustomerSignin = (value) => {
  return ustomerSignInSchema.validate(value);
};

const updateCustomerInfoSchema = Joi.object({
  full_name: Joi.string().allow('').optional(),
  phone: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9][0-9]{8}$/)
    .required(),
  email: Joi.string().email().allow('').optional(),
});

export const validateCustomerInfo = (value) => {
  return updateCustomerInfoSchema.validate(value);
};
