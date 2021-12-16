/**
 * Purpose : handle the requests and sends the response
 * @file : order.controller.js
 * @author  : Abdul Ziyan
 */

 const {
    addOrderDetails
  } = require("../service/order.service");
  const logger = require("../../logger/logger");

  
  /**
   * @description Handles the request and response for adding order details
   * @param {Object} req
   * @param {Object} res
   */
  exports.confirmOrder = (req, res) => {
    let orderDetails = {
      UserId: req.body.UserId,
     orderId : req.body.orderId,
     title : req.body.title ,
     totalAmount : req.body.totalAmount,
     status : req.body.status,
    };
    var confirmOrder = addOrderDetails(orderDetails);
  
    confirmOrder
      .then((result) => {
        logger.info("Added order details successfully")
        res.status(200).json({
          message: "Added order details successfully",
          cartItem : result
        });
      })
      .catch((error) => {
        logger.error("Error while adding order details ",error)
        res.status(500).send({
          message: error.message ,
        });
      });
  };
