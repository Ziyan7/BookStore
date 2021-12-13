/**
 * Purpose : Services contain all business logic and returns objects or throws errors to the controller
 * @file : note.service.js
 * @author  : Abdul Ziyan
 */

 const {
    createCart,
    findBooks,
    updateById
  } = require("../model/cart.model.js");
  
  /**
   * @description intermediate function to create new cart item
   * @param {object} notes 
   * @returns data or error
   */
  
  const createNewCart = (cartItem) => {
    return createCart(cartItem)
      .then((cart) => {
        return cart;
      })
      .catch((error) => {
        throw error;
      });
  };

  /**
 * @description intermediate function to get all notes
 * @param {object} bookId  
 */
const findAllBooks = (UserId, callback) => {
  findBooks(UserId, (error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};

/**
 * @description intermediate function to update number of books based noteID
 * @param {Object} update 
 * @returns data or error
 */
 const updateByBookId = (update) => {
  return updateById(update)
    .then((note) => {
      return note;
    })
    .catch((error) => {
      throw error;
    });
};


  module.exports = {
    createNewCart,
    findAllBooks,
    updateByBookId
  };