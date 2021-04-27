const Joi = require('joi');

module.exports = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

  email: Joi.string().email().required(),
});
