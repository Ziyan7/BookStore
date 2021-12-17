import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppBar from "../component/Appbar.jsx";
import { Redirect } from "react-router";
import { setAllBooks ,  setAllCartBooks } from "../action/index";
import { useDispatch } from "react-redux";
import bookService from "../service/book.service";
import Book from "../component/Book.jsx";
import {getCartBooks} from "../service/cart.service";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    bookService.
   getBooks()
      .then((res) => {
        dispatch(setAllBooks(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

      getCartBooks()
      .then((res) => {
        dispatch(setAllCartBooks(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <AppBar />
        <Book />
      </Box>
    );
  }
};
export default Dashboard;
