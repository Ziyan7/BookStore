/**
 * Purpose : Services contain all business logic and returns objects or throws errors to the controller
 * @file : order.service.js
 * @author  : Abdul Ziyan
 */

 const {
    addOrder , 
    findOrderDetails
  } = require("../model/order.model.js");



  
  /**
   * @description intermediate function toadd order details
   * @param {object} cartItem 
   * @returns data or error
   */
  
  const addOrderDetails = (orderDetails) => {
    return addOrder(orderDetails)
      .then((order) => {
        return order;
      })
      .catch((error) => {
        throw error;
      });
  };

  const getOrder = (UserId , orderId) => {
    return findOrderDetails(UserId , orderId)
      .then((note) => {
        return note;
      })
      .catch((error) => {
        throw error;
      });
  };

  module.exports = {addOrderDetails, getOrder}