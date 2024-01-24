const Joi = require("joi");

const UserValidation = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(3),
    lastname: Joi.string().required().min(4),
    phone: Joi.string().required().min(8),
    stories: Joi.array().items(
      Joi.object({
        boughtTime: Joi.string().required(),
        totalPrice: Joi.number().required(),
        products: Joi.array()
          .items(
            Joi.object({
              name: Joi.string().required(),
              price: Joi.number().required(),
              description: Joi.string().required(),
              image: Joi.string().required(),
              weight: Joi.number().required(),
              category: Joi.string().required(),
              type: Joi.string().required(),
              quantity: Joi.number().required(),
            })
          )
          .required(),
      })
    ),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};

module.exports = { UserValidation };
