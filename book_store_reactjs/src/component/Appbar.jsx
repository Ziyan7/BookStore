import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import "../style/dashboard.scss";
import { useDispatch } from "react-redux";
import { searchfilteredBooks } from "../action/index.js";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import * as Routing from "react-router-dom";
import {searchBook} from "../service/book.service";

import React, { useState, useEffect } from "react";
const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "#A03037",
}));

const Appbar = () => {


  const myBooks = useSelector((state) => state.allBooks.bookState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchfilteredBooks(myBooks));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myBooks]);

  const handleSearch = (event) => {
    console.log(event.target.value)
    if (event.target.value.length >= 2) {
     searchBook({ searchText: event.target.value })
        .then((res) => {
          dispatch(searchfilteredBooks(res));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(searchfilteredBooks(myBooks));
    }
  };

  return (
    <AppBar >
    <Toolbar>
      <IconButton style={{ paddingLeft: "4%" }}>
        <ImportContactsIcon id="book-icon" fontSize="large"  />
      </IconButton>
      <Typography id="book-title" component={Routing.Link} to="/dashboard" style={{ paddingRight: "5%" , color : "white" , textDecoration : "none"}}>
        BookStore
      </Typography>
      <TextField
        placeholder="Search…"
        id="search-bar"
        variant="outlined"
        style = {{width : "45%"}}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon id="search-icon" />
              </IconButton>
            </InputAdornment>
          ),
          style: { height: "40px", backgroundColor: "white" , },
        }}
        onChange={(event) => handleSearch(event)}
      />
      <Typography variant="h6" id="cart-title" style = {{paddingLeft : "20%"}} >
        Cart
      </Typography>
      <IconButton component={Routing.Link} to="/cart"  style={{ color: "white", paddingRight: "6%" }} >
        <ShoppingCartIcon id="cart-icon" fontSize="large"  />
      </IconButton>
    </Toolbar>
  </AppBar>
);
};

export default Appbar;
