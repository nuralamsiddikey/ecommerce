import Joi from 'joi';

const blogSchema = Joi.object({
  type: Joi.string()
    .valid(
      'digital_health_service',
      'branding',
      'ui_and_ux',
      'development_and_security'
    )
    .required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  figma_embed: Joi.string().required(),
});

export const blogValidate = (value) => {
  return blogSchema.validate(value);
};

const blogQuerySchema = Joi.object({
  type: Joi.string()
    .valid(
      'all',
      'digital_health_service',
      'branding',
      'ui_and_ux',
      'development_and_security'
    )
    .required(),
});
export const blogQueryValidate = (value) => {
  return blogQuerySchema.validate(value);
};
