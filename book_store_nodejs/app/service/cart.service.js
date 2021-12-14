/**
 * Purpose : Services contain all business logic and returns objects or throws errors to the controller
 * @file : cart.service.js
 * @author  : Abdul Ziyan
 */

 const {
    createCart,
    findBooks,
    updateById,
    deleteCartBook
  } = require("../model/cart.model.js");

  const {
   addDetails, 
   findDetails
  } = require("../model/customerDetails.model.js");

  
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
 * @description intermediate function to get all cart item
 * @param {object} bookId  
 */
const findAllBooks = (UserId, callback) => {
  findBooks(UserId, (error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};

/**
 * @description intermediate function to update number of books 
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

/**
 * @description intermediate function to delete cart item based bookID
 * @param {Object} id 
 * @param {Object} UserId 
 * @returns 
 */
 const deleteCartItem = (id,UserId) => {
  return deleteCartBook(id,UserId)
  .then((book) => {
    return book;
  })
  .catch((error) => {
    throw error;
  });
};

 /**
   * @description intermediate function to add customer details
   * @param {object} cartItem 
   * @returns data or error
   */
  
  const addCustomerDetails = (cartItem) => {
    return addDetails(cartItem)
      .then((cart) => {
        return cart;
      })
      .catch((error) => {
        throw error;
      });
  };

    /**
 * @description intermediate function to get all customer details
 * @param {object} bookId  
 */
const findCustomerDetails = (UserId, callback) => {
  findDetails(UserId, (error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};

  module.exports = {
    createNewCart,
    findAllBooks,
    updateByBookId,
    deleteCartItem,
    addCustomerDetails,
    findCustomerDetails
  };