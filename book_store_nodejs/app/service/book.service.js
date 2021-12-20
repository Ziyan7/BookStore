/**
 * Execution: 1. default node  cmd> nodemon server.js
 * Purpose : Services contain all business logic and returns objects or throws errors to the controller
 * @file : book.service.js
 * @author  : Abdul Ziyan
 */
const { findBooks  } = require("../model/book.model.js");


  const findAllTheBooks = async (index, sortIndex) => {
    let page = parseInt(index);
    page = (page - 1) * 12;
    try {
      const data = await findBooks();
      if (sortIndex == -1) {
        data.sort((a, b) => a.price - b.price);
      } else if (sortIndex == 1) {
        data.sort((a, b) => b.price - a.price);
      } else {
        return {count:data.length,data:data.slice(page, page + 12)};
      }
      return {count:data.length,data:data.slice(page, page + 12)};
    } catch (error) {
      logger.error(error);
      throw error;
    }
  };

   /**
   * @description Service layer function to search book in database
   * @returns err or data
   */
    const filterBook = async (body) => {
      try {
        let data = await findBooks();
        let filteredData = data.filter((item) => {
          return (
            item.title.toLowerCase().includes(body.searchText.toLowerCase()) 
          );
        });
        return filteredData;
      } catch (error) {
        logger.error(error);
        throw error;
      }
    };

module.exports = {
    findAllTheBooks, filterBook
};
