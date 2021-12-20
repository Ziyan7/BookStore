/**
 * Execution: 1. default node  cmd> nodemon server.js
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
   * @description finds all notes present in data base
   * @returns err or data
   */
  const findBooks = async () => {
    try {
      const data = await Book.find();
      return data;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    findBooks,
};
