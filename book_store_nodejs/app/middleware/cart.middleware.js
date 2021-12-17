/**
 * Purpose : Validates the requests and token
 * @file : cart.middleware.js
 * @author  : Abdul Ziyan
 */

const logger = require("../../logger/logger");
const jwt = require("../../utility/jwt");
const Joi = require("joi");

/**
 * @description Authozization based on correct tokens
 * @param {object} req
 * @param {object} res
 */
const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"] || req.headers.token;
  if (!bearerHeader) {
    res.send("Not Authorized");
  }
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  jwt.verifyToken(token, (error, data) => {
    if (error) {
      logger.error(error);
      return res.send(error);
    }
    req.body.UserId = data.id;
    next();
  });
};

/** joi is used to validate input properties
 */
const validate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phoneNumber: Joi.string()
      .regex(/^[91]+[ ][0-9]{10}$/)
      .message("Enter a valid mobile number")
      .required(),
    pincode: Joi.number().min(6).required(),
    locality: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    landmark: Joi.string().required(),
    type: Joi.string().required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.json({ message: result.error.message });
  }
  next();
};
module.exports = { ensureToken, validate };
