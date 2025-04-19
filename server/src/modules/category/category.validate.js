import Joi from 'joi';

const categorySchema = Joi.object({
   category_name: Joi.string().required(),
   category_details: Joi.string().allow('').required(),
   category_photo: Joi.string().allow('').required(),
});

export const categoryValidate = (value) => {
  return categorySchema.validate(value);
};

