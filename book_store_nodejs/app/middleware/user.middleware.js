/**
 * Purpose : Validates the requests  
 * @file : user.middleware.js
 * @author  : Abdul Ziyan
 */

const Joi = require("joi");
const jwt = require("../../utility/jwt");


/** joi is used to validate three properties i.e.
 *name, age and mobileNumber
 */
const validate = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .regex(/^[A-Z][a-zA-Z]/)
      .message("First letter of the name must be in uppercase ")
      .required(),

    lastName: Joi.string()
      .min(3)
      .regex(/^[A-Z][a-zA-Z]/)
      .message("First letter of the name must be in uppercase ")
      .required(),
      
    contactNumber: Joi.string()
    .regex(/^[91]+[ ][0-9]{10}$/)
    .message("Enter a valid mobile number")
  ,

    email: Joi.string().email().required(),
    password: Joi.string(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.json({ message: result.error.message });
  }
  next();
};
 /**
   * @description verify resetLink
   * @param {object} req 
   * @param {object} res 
   */
  const verifyResetLink = (req,res,next)=>{
    let reset = req.params.resetId;
    jwt.verifyToken(reset, (error, data) => {
      if (error) {
        return res.send(error);
      }
      req.body.email = data.email; 
      next();
    });
  };

module.exports = {validate , verifyResetLink};
