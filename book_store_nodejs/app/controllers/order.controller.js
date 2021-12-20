/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : handle the requests and sends the response
 * @file : order.controller.js
 * @author  : Abdul Ziyan
 */

 const {
    addOrderDetails , 
    getOrder
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
     quantity :  req.body.quantity ,
     totalAmount : req.body.totalAmount,
     status : req.body.status,
    };
    var confirmOrder = addOrderDetails(orderDetails);
  
    confirmOrder
      .then((result) => {
        logger.info("Added order details successfully")
        res.status(200).json({
          message: "Added order details successfully",
          orderItem : result
        });
      })
      .catch((error) => {
        logger.error("Error while adding order details ",error)
        res.status(500).send({
          message: error.message ,
        });
      });
  };

  exports.  getOrderId = (req, res) => {
    UserId = req.body.UserId;
    orderId = req.params.orderId
  var getOrderDetails = getOrder(UserId , orderId);
  getOrderDetails
  .then((order) => {
    logger.info("Retrieved note successfully")
    res.send(order);
  })
  .catch((err) => {
    logger.error("Order details not found");
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Order details not found ",
      });
    }
    return res.status(500).send({
      message: "Error retrieving order details",
    });
  });
  }