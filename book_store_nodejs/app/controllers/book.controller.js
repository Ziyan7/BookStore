/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : handle the requests and sends the response
 * @file : book.controller.js
 * @author  : Abdul Ziyan
 */

const { findAllTheBooks , filterBook } = require("../service/book.service.js");
const logger = require("../../logger/logger.js");

  /**
   * @description Handles the request and response for finding all books
   * @param {Object} req
   * @param {Object} res
   */
exports.findAll = async (req, res) => {
    try {
      const data = await findAllTheBooks(req.params.index,req.params.sort);
      logger.info(data);
      return res.send(data);
    } catch (err) {
      logger.error("Could not find book", err);
      return res.send(err);
    }
  };

   /**
   * @description Handles the request and response for searching books
   * @param {Object} req
   * @param {Object} res
   */
    exports.searchBook = async (req, res) => {
      console.log(res.body)
      try {
        let data = await filterBook(req.body);
        logger.info("search book succussfull");
        return res.status(200).send(data);
      } catch (error) {
        logger.error(error);
        return res.status(500).send(err);
      }
    };
