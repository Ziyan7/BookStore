/**
 * Purpose : The schema definition of the Model
 * @file : cart.model.js
 * @author  : Abdul Ziyan
 */

 const mongoose = require("mongoose");

 /**
  * @description creation of schema for cart collection
  * @requires mongoose
  */
 const CartSchema = mongoose.Schema(
   {
    
     UserId: mongoose.Schema.Types.ObjectId,
     bookId:  mongoose.Schema.Types.ObjectId,
     author: String,
     title: String,
     image: String,
     price: Number,
     numberOfBooks : Number
   },
   {
     timestamps: true,
   }
 );
 
 const Cart = mongoose.model("Cart", CartSchema);
 
 /**
 * @description Create a cartItem
 * @param {Object} cart 
 * @returns data or error
 */
const createCart = (cartItem) => {
    const cart = new Cart({
      UserId: cartItem.UserId,
      bookId : cartItem.bookId,
      author: cartItem.author,
      title: cartItem.title,
      image: cartItem.image,
      price:cartItem.price,
      numberOfBooks : cartItem.numberOfBooks
   
    });
    // Save cartItem in the database
    return cart
      .save()
      .then((cart) => {
        return cart;
      })
      .catch((error) => {
        throw error;
      });
  };

  const findBooks = (UserId, callback) => {
    Cart.find({UserId : UserId})
    .find()
    .exec((error, data) => {
      return error ? callback(error, null) : callback(null, data);
    });
  };

  /**
 * @description function to update number of books in the database based on Id
 * @param {Object} update 
 * @returns data or error
 */
 const updateById = (update) => {
  return Cart.findById(update.id)
    .findOneAndUpdate(
      {UserId:update.UserId},
      {
        numberOfBooks : update.numberOfBooks
      },
      { new: true }
    )
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
 
  module.exports = { createCart , findBooks , updateById};