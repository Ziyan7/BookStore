import {Box } from "@mui/material";
import Cartitem from "../component/Cartitem";
import AppBar from "../component/Appbar";
import {getCartBooks} from "../service/cart.service";
import {  setAllCartBooks } from "../action/index";
import { useDispatch } from "react-redux";
import React, {  useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      getCartBooks()
      .then((res) => {
        dispatch(setAllCartBooks(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <Box>
      <AppBar />
      <Cartitem />
    </Box>
  );
};
export default Cart;
