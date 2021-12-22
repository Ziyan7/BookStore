import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector } from "react-redux";
import { setUpdate, deleteCartDetails } from "../action/index.js";
import { updateBooksQuantity, deleteCartItem } from "../service/cart.service";
import Customerdetails from "./Customerdetails";
import { useDispatch } from "react-redux";
import "../style/dashboard.scss";

const Cartitem = () => {
  const myCart = useSelector((state) => state.allBooks.cartBooks);
  const [visible, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const updateNoOfBooks = (id, index, count) => {
    let data = {
      numberOfBooks: count === 0 ? 1 : count,
    };

    updateBooksQuantity(data, id)
      .then((res) => {
        dispatch(setUpdate({ data: res, index: index }));
      })
      .catch((err) => console.log(err.message));
  };

  const deleteCartBooks = (id) => {
    deleteCartItem(id)
      .then((res) => {
        dispatch(deleteCartDetails({ data: res.book }));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={4} style={{ padding: "130px 4% 4% 15%" }}>
        <Grid
          id="cart-layout"
          sx={{
            width: "68%",
            border: "1px solid",
            borderColor: "#DCDCDC",
            padding: "2% 0 3% 3%",
          }}
        >
          <Typography fontWeight={"bold"}>My cart ({myCart.length})</Typography>
          {myCart.map((book, index) => (
            <Grid item xs={12}>
              <Card
                id="cart-card"
                elevation={"none"}
                sx={{
                  width: "80%",
                  height: "110%",
                  paddingBottom: "2%",
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
                        paddingTop: "50%",
                        height: "50%",
                      }}
                      image={book.image}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <CardContent sx={{ paddingTop: "10%" }}>
                      <Typography
                        style={{
                          textAlign: "left",
                          fontSize: "100%",
                          color: "#0A0102",
                        }}
                      >
                        {book.title}
                      </Typography>
                      <Typography
                        style={{
                          height: "20px",
                          fontSize: "70%",
                          color: "#9D9D9D",
                        }}
                      >
                        by {book.author}
                      </Typography>

                      <Typography
                        style={{
                          height: "20px",
                          fontSize: "100%",
                          fontWeight: "bold",
                          color: "#0A0102",
                        }}
                      >
                        Rs.{book.price * book.numberOfBooks}
                      </Typography>
                    </CardContent>
                    <Stack direction="row">
                      <IconButton
                        onClick={() => {
                          updateNoOfBooks(
                            book._id,
                            index,
                            book.numberOfBooks - 1
                          );
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Box
                        sx={{
                          marginTop: "7px",
                          width: "10%",
                          height: "10%",
                          border: 2,
                          borderColor: "#DBDBDB",
                          borderRadius: "1px",
                          textAlign: "center",
                        }}
                      >
                        {book.numberOfBooks}
                      </Box>
                      <IconButton>
                        <AddCircleOutlineIcon
                          onClick={() => {
                            updateNoOfBooks(
                              book._id,
                              index,
                              book.numberOfBooks + 1
                            );
                          }}
                        />
                      </IconButton>
                      <Button
                        style={{ color: "black", width: "10%" }}
                        onClick={() => deleteCartBooks(book._id)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Stack direction="row-reverse" sx={{ paddingRight: "35px" }}>
            <Button
            id ="purchase-btn"
              variant="contained"
              type="submit"
              size="small"
              style={{
                background: "#3371B5",
                color: "white",
                width: "20%",
                height: "20%",
              }}
              onClick={() => {
                setVisibility(true);
              }}
            >
              PLACE ORDER
            </Button>
          </Stack>
        </Grid>
        <Customerdetails visible={visible} setVisibility={setVisibility} />
      </Grid>
    </Box>
  );
};
export default Cartitem;
