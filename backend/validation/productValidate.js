const Joi = require("joi");

const ProductValidation = (req, res, next) => {
  let schema = new Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().min(3),
    weight: Joi.number().required(),
    category: Joi.string().required(),
    type: Joi.string(),
    quantity: Joi.number().required(),
  });

  let { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "warning",
      msg: error.details[0].message,
      innerData: null,
    });
  }

  next();
};

module.exports = { ProductValidation };
