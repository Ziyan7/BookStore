/**
 * Purpose : Validates the requests and token 
 * @file : cart.middleware.js
 * @author  : Abdul Ziyan
 */

 const logger  = require("../../logger/logger");
 const jwt = require("../../utility/jwt");
 
 /**
  * @description Authozization based on correct tokens
  * @param {object} req 
  * @param {object} res  
  */
 const ensureToken = (req, res, next) => {
     const bearerHeader = req.headers["authorization"]|| req.headers.token;
     if (!bearerHeader) {
       res.send("Not Authorized");
     }
     const bearer = bearerHeader.split(" ");
     const token = bearer[1];
     jwt.verifyToken(token, (error, data) => {
       if (error) {
         logger.error(error)
         return res.send(error);
       }
       req.body.UserId = data.id;
       next(data.Id);
     });
   };
   module.exports = {ensureToken};
 