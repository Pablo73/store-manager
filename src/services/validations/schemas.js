const Joi = require('joi');

const nameSchema = Joi.string().required().label('name').min(5)
.label('name');

module.exports = {
  nameSchema,
};
