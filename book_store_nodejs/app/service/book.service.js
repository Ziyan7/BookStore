/**
 * Purpose : Services contain all business logic and returns objects or throws errors to the controller
 * @file : book.service.js
 * @author  : Abdul Ziyan
 */
const { findBooks } = require("../model/book.model.js");

/**
 * @description intermediate function to get all books
 * @param {callback} callback
 */
const findAllTheBooks = (callback) => {
    findBooks((error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};

module.exports = {
    findAllTheBooks,
};
