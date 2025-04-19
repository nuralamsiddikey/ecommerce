import Joi from 'joi';

const authSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9][0-9]{8}$/)
    .required(),
  password: Joi.string().required(),
});

export const authValidate = (value) => authSchema.validate(value);
