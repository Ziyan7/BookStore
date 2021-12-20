/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : The API routes maps to the Controller
 * @file : book.router.js
 * @author  : Abdul Ziyan
 */

 const book = require("../controllers/book.controller.js");
 module.exports = (app) => {

   // Retrieve all User Books
   app.get("/book/:index/:sort", book.findAll);

  // finds all book based on search key
   app.post("/book/search", book.searchBook)
 }