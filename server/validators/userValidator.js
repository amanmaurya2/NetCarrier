// validators/userValidator.js
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  // Add other validation rules for user data
});

module.exports = { userSchema };
