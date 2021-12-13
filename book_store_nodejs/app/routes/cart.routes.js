/**
 * Purpose : The API routes maps to the Controller
 * @file : book.router.js
 * @author  : Abdul Ziyan
 */

 const cart = require("../controllers/cart.controller.js");
 const {ensureToken} = require('../middleware/cart.middleware.js');
 
 module.exports = (app) => {
     // Create a new UserInfo
  app.post("/cart",ensureToken, cart.create);

// Retrieve all cartBooks
app.get('/cart',ensureToken, cart.findAll);
 
// Update Cart
app.put("/cart/:bookId",ensureToken, cart.update);

 }