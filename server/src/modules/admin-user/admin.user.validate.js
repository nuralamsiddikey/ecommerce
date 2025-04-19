import Joi from 'joi';

const adminSchema = Joi.object({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base':
        'phone number must be a valid Bangladeshi number.',
    }),

  password: Joi.string().required(),
});




export const adminUserValidate = (value) => {
  return adminSchema.validate(value);
};

