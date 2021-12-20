/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : The schema definition of the Model
 * @file : customer.model.js
 * @author  : Abdul Ziyan
 */

const mongoose = require("mongoose");

/**
 * @description creation of schema for customer detail collection
 * @requires mongoose
 */
const DetailsSchema = mongoose.Schema(
  {
    UserId: mongoose.Schema.Types.ObjectId,
    name: String,
    phoneNumber: String,
    pincode: Number,
    locality: String,
    address: String,
    city: String,
    landmark: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

const CustomerDetails = mongoose.model("CustomerDetails", DetailsSchema);

/**
 * @description Add customer details
 * @param {Object} cart
 * @returns data or error
 */
const addDetails = (cartItem) => {
  const cart = new CustomerDetails({
    UserId: cartItem.UserId,
    name: cartItem.name,
    phoneNumber: cartItem.phoneNumber,
    pincode: cartItem.pincode,
    locality: cartItem.locality,
    address: cartItem.address,
    city: cartItem.city,
    landmark: cartItem.landmark,
    type: cartItem.type,
  });
  return CustomerDetails
    .findOne({ UserId: cartItem.UserId })
    .then((user) => {
      if (!user) {
        return cart
          .save()
          .then((cart) => {
            return cart;
          })
          .catch((error) => {
            throw error;
          });
      } else {
        return CustomerDetails
          .findOneAndUpdate({ UserId: cartItem.UserId }, cartItem, { new: true })
          .then((cart) => {
            return cart;
          })
          .catch((error) => {
            throw error;
          });
      }
    })
    .catch((error) => {
      throw error;
    });
};


/**
 *@description model function for finding all the customer details in database
 * @param {callback} callback
 * @returns error or data
 */
const findDetails = (UserId, callback) => {
  CustomerDetails.findOne({ UserId: UserId }).exec((error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};
module.exports = { addDetails, findDetails };
