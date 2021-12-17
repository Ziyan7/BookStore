/**
 * Purpose : handle the requests and sends the response
 * @file : book.controller.js
 * @author  : Abdul Ziyan
 */

const { findAllTheBooks } = require("../service/book.service.js");
const logger = require("../../logger/logger.js");
const statusObject = require("./user_controller/user.responseSchema");
let responseStatus;

/**
 * @description Retrieve and return all books from the database.
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = (req, res) => {
  findAllTheBooks((error, data) => {
    if (error) {
      logger.error(error);
      responseStatus = statusObject.userApiFailure;
      responseStatus.message = error;
      return res.send(responseStatus);
    }
    res.send(data);
  });
};
