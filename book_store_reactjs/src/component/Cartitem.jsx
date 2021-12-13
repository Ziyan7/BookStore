import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack ,
  Button,
  IconButton

} from "@mui/material";
import bookService from "../service/cart.service";
import React, { useState,useEffect } from "react";
import AppBar from "../component/Appbar";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAllCartBooks , setUpdate } from "../action/index.js";
import cartService from "../service/cart.service";


const Cartitem = () => {
  const myCart = useSelector((state) => state.allBooks.cartBooks);
  const [count , setCount] = useState(1)
  const dispatch = useDispatch();
  useEffect(() => {
    bookService
      .getCartBooks()
      .then((res) => {
        console.log(res.data)
        dispatch(setAllCartBooks(res.data))
      console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateNoOfBooks = (id,index) => {
    let data = {
      numberOfBooks :count
    }
    cartService
    .updateBooksQuantity(data,id)
    .then((res) => { 
      console.log(res);
      dispatch(setUpdate({data: res, index:index}));
    })
    .catch((err) => console.log(err.message));
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Grid
      container
      spacing={4}
      style={{ paddingTop: 90, paddingLeft: "15%" }}
    >
      {myCart.map((book, index) => (
        <Grid item xs={12} >
          <Card
            variant="outlined"
            sx={{
              width: "70%",
              height: "110%",
            }}
            key={index}
          >
            <Grid container>
              <Grid
                item
                xs={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CardMedia
                  component="img"
                  alt="images"
                  sx={{
                    width: "50%",
                    paddingTop : "50%",
                    height:"50%"
                  }}
                  image={book.image}
                />
              </Grid>
              <Grid item xs={9}>
                <CardContent sx={{ paddingTop: "10%" }}>
                  <Typography
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#0A0102",
                    }}
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    style={{
                      height: "20px",
                      fontSize: "10px",
                      color: "#9D9D9D",
                    }}
                  >
                    by {book.author}
                  </Typography>

                  <Typography
                    style={{
                      height: "20px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "#0A0102",
                    }}
                  >
                    Rs.{book.price}
                  </Typography>
                </CardContent>
                <Stack direction="row">
                <IconButton >
                    <RemoveCircleOutlineIcon onClick= {() => {updateNoOfBooks(book._id, index);
                    setCount(prev => prev - 1 )}} />
                  </IconButton>
                  <Box
                    sx={{
                      marginTop: "7px",
                      width: "41px",
                      height: "24px",
                      border: 2,
                      borderColor: "#DBDBDB",
                      borderRadius: "1px",
                      textAlign: "center",
                    }}
                  >
                    {book.numberOfBooks}
                  </Box>
                  <IconButton >
                    <AddCircleOutlineIcon onClick= {() => {updateNoOfBooks(book._id, index);
                    setCount(prev => prev+1 )}}/>
                  </IconButton>
                  <Button style={{color : "black"}}>Remove</Button>
                </Stack>
                <Stack spacing={2} direction="row-reverse" sx={{ paddingLeft: "15px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{ background: "#3371B5", color: "white", width:"30%", height:"20%"}}
                  >
                    Place Order
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};
export default Cartitem;
