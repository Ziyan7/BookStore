import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppBar from "../component/Appbar.jsx";
import { Redirect } from "react-router";
import { setAllBooks ,  setAllCartBooks } from "../action/index";
import { useDispatch } from "react-redux";
import {getBooks} from "../service/book.service";
import Book from "../component/Book.jsx";
import {getCartBooks} from "../service/cart.service";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [count,setCount] = useState(0)
  const token = sessionStorage.getItem("token");
  useEffect(() => {
   getBooks(1)
      .then((res) => {
        setCount(res.data.count)
        dispatch(setAllBooks(res.data.data));
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
        <Book count ={count} />
      </Box>
    );
  }
};
export default Dashboard;
