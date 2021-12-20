/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : The schema definition of the Model
 * @file : order.model.js
 * @author  : Abdul Ziyan
 */

const mongoose = require("mongoose");
/**
 * @description creation of schema for order detail collection
 * @requires mongoose
 */
const OrderSchema = mongoose.Schema(
  {
    UserId: mongoose.Schema.Types.ObjectId,
    orderId: Number,
    title: String,
    quantity : Number,
    totalAmount: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
const addOrder = (orderDetails) => {
  const newOrder = new Order({
    UserId: orderDetails.UserId,
    orderId: orderDetails.orderId,
    title: orderDetails.title,
    quantity : orderDetails.quantity,
    totalAmount: orderDetails.totalAmount,
    status: orderDetails.status,
  });

  return newOrder
    .save()
    .then((order) => {
      return order;
    })
    .catch((error) => {
      return error;
    });
};

const findOrderDetails = (UserId , orderId) => {
  return Order.find({ UserId: UserId })
  .findOne({orderId : orderId})
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
module.exports = { addOrder , findOrderDetails };
