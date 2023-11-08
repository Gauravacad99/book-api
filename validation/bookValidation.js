const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string(),
  summary: Joi.string(),
});

const bookIdParamSchema = Joi.object({
    id: Joi.string().length(24).hex().required(), // Assuming MongoDB ObjectId format
  })

module.exports = {bookSchema,bookIdParamSchema};
