/**
 * Purpose : The API routes maps to the Controller
 * @file : book.router.js
 * @author  : Abdul Ziyan
 */

const cart = require("../controllers/cart.controller.js");
const order = require("../controllers/order.controller.js");
const { ensureToken , validate } = require("../middleware/cart.middleware.js");

module.exports = (app) => {
  // Create a new UserInfo
  app.post("/cart", ensureToken, cart.create);

  // Retrieve all cartBooks
  app.get("/cart", ensureToken, cart.findAll);

  // Update Cart
  app.put("/cart/:bookId", ensureToken, cart.update);

   // Delete a Note with noteId
   app.delete('/cart/:bookId',ensureToken, cart.delete);

   //Add Customer Details
   app.post("/customer-details",validate, ensureToken, cart.addDetails);

   //Add Customer Details
   app.get("/customer-details", ensureToken, cart.findDetails);

   //Order Confirmation details 
   app.post("/order", ensureToken , order.confirmOrder)
};
