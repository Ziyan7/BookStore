/**
 * Purpose : handle the requests and sends the response
 * @file : cart.controller.js
 * @author  : Abdul Ziyan
 */

 const {
    createNewCart ,
    findAllBooks,
    updateByBookId
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

