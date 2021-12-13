/**
 * Purpose : The API routes maps to the Controller
 * @file : book.router.js
 * @author  : Abdul Ziyan
 */

 const book = require("../controllers/book.controller.js");
 
 module.exports = (app) => {

   // Retrieve all User Books
   app.get("/book", book.findAll);

 }