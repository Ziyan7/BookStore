/**
 * Purpose : handle the requests and sends the response
 * @file : cart.controller.js
 * @author  : Abdul Ziyan
 */

 const {
    createNewCart ,
    findAllBooks,
    updateByBookId ,
    deleteCartItem ,
    addCustomerDetails , 
    findCustomerDetails
  } = require("../service/cart.service");
  const logger = require("../../logger/logger");
  
  /**
   * @description Handles the request and response for creating a cart item
   * @param {Object} req
   * @param {Object} res
   */
  exports.create = (req, res) => {
    let cartDetails = {
      UserId: req.body.UserId,
     bookId : req.body.bookId,
     author: req.body.author,
     title: req.body.title,
     image: req.body.image,
     price: req.body.price,
     numberOfBooks : 1,
    };
    var newCartItem = createNewCart(cartDetails);
  
    newCartItem
      .then((result) => {
        logger.info("Created new cartitem successfully")
        res.status(200).json({
          message: "Added Cart item successfully",
          cartItem : result
        });
      })
      .catch((error) => {
        logger.error("Error while creating cart item ",error)
        res.status(500).send({
          message: error.message ,
        });
      });
  };

  /**
 * @description Retrieve and return all books from the database.
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = (req, res) => {
  UserId = req.body.UserId;
  findAllBooks(UserId,(error, data) => {
    if (error) {
      logger.error("Error while finding all books ",error)
      res.status(500).send({
        message: error.message ,
      });
    }
    logger.info("Retrieved all books successfully")
    res.send(data);
  });
};

/**
 * @description Update the number of books in the cart
 * @param {Object} req
 * @param {Object} res
 */
 exports.update = (req, res) => {
  let update = {
    id : req.params.bookId,
    UserId: req.body.UserId,
    numberOfBooks : req.body.numberOfBooks
  }
 
 
  var updateCartBook = updateByBookId(update);
  updateCartBook
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      logger.info("Updated note successfully")
      res.send(note);
    })
    .catch((err) => {
      logger.error("Note not found with id " + req.params.noteId);
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId,
      });
    });
};

/**
 * @description Delete a cart book ussing specified bookId 
 * @param {Object} req
 * @param {Object} res
 */
 exports.delete = (req, res) => {
  var id = req.params.bookId;
  UserId = req.body.UserId;
  const deleteById = deleteCartItem(id,UserId);
  deleteById
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      logger.info("Removed book successfully")
      res.send({ message: "Removed book successfully!",book :book });
    })
    .catch((err) => {
      logger.error("book deletion Unsuccessful");
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.bookId,
      });
    });
};

  /**
   * @description Handles the request and response for adding customer details 
   * @param {Object} req
   * @param {Object} res
   */
   exports.addDetails = (req, res) => {
    let customerDetails = {
      UserId: req.body.UserId,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      pincode : req.body.pincode,
      locality: req.body.locality,
      address: req.body.address,
      city: req.body.city,
      landmark: req.body.landmark,
      type: req.body.type,
    };
    var newDetails = addCustomerDetails(customerDetails);
    newDetails
      .then((result) => {
        logger.info("Added details successfully")
        res.status(200).json({
          message: "Added details successfully",
          details : result
        });
      })
      .catch((error) => {
        logger.error("Error while adding details ",error)
        res.status(500).send({
          message: error.message ,
        });
      });
  };

  
  /**
 * @description Retrieve and return all customer details
 * @param {Object} req
 * @param {Object} res
 */
exports.findDetails = (req, res) => {
  UserId = req.body.UserId;
  findCustomerDetails(UserId,(error, data) => {
    if (error) {
      logger.error("Error while finding the details ",error)
      res.status(500).send({
        message: error.message ,
      });
    }
    logger.info("Retrieved all the details successfully")
    if(!data){
      return res.status(404).send({message : "empty"})
    }
    res.send(data);
  });
};


