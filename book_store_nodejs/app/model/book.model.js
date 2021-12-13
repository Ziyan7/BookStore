/**
 * Purpose : The schema definition of the Model
 * @file : book.model.js
 * @author  : Abdul Ziyan
 */

const mongoose = require("mongoose");

/**
 * @description creation of schema for books collection
 */
const BooksSchema = mongoose.Schema(
  {
    author: String,
    title: String,
    image: String,
    price: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("books", BooksSchema);

/**
 *@description model function for finding all books in database
 * @param {callback} callback
 * @returns error or data
 */
const findBooks = (callback) => {
    Book.find((error, data) => {
    return error ? callback(error, null) : callback(null, data);
  });
};


module.exports = {
    findBooks,
};
