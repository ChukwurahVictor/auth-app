const Joi = require('@hapi/joi');

module.exports.userSignupValidation = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(7).required()
});

module.exports.loginValidation = Joi.object({
   name: Joi.string().required(),
   email: Joi.string().email().required(),
   password: Joi.string().required()
})
