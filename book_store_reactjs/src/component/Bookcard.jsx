import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Menu,
  MenuItem,
  MenuList,
  ListItemText,
} from "@mui/material";
import {addBook} from "../service/cart.service";
import { useDispatch } from "react-redux";
import { setCartBooks } from "../action/index.js";
import { useSelector } from "react-redux";
import { useState } from "react";

const Bookcard = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let addToBag = false;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.allBooks.cartBooks);
  const addToCart = () => {
    addBook(item)
      .then((res) => {
        console.log(res);
        dispatch(setCartBooks(res.cartItem));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card sx={{ height: 345, width: 235 }}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        style={{ maxWidth: "70%", padding: "3% " }}
      >
        <MenuList dense style={{ padding: "3% ", outline: "none" }}>
          <Typography fontWeight={"bold"}>Book Details</Typography>
          <ListItemText>{item.description} </ListItemText>
        </MenuList>
      </Menu>
      <CardMedia
        component="img"
        alt="Loading"
        // height="171"
        style={{ height: "50%", width: "50%", paddingLeft: "25%" }}
        image={item.image}
        onClick={handleClick}
      />
      <CardContent sx={{ height: 80 }}>
        <Typography align="left" style={{ fontSize: "14px" }}>
          {item.title}
        </Typography>
        <Typography
          align="left"
          color="text.secondary"
          style={{ fontSize: "10px", color: "#9D9D9D" }}
        >
          by {item.author}
        </Typography>
        <Typography
          align="left"
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >
          Rs. {item.price}
        </Typography>
      </CardContent>
      {myCart.map((data) => {
        if (item.title === data.title) {
          addToBag = true;
        }
      })}
      {addToBag && (
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            fullWidth
            style={{
              fontSize: "11px",
              backgroundColor: "#3371B5",
              color: "black",
            }}
            onClick={addToCart}
          >
            Added to bag
          </Button>
        </CardActions>
      )}

      {!addToBag && (
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            fullWidth
            id = "add-cart-btn"
            style={{
              fontSize: "11px",
              backgroundColor: "#A03037",
              color: "black",
            }}
            onClick={addToCart}
          >
            Add to bag
          </Button>

          <Button
            fullWidth
            style={{
              fontSize: "11px",
              color: "black",
              borderColor: "black",
            }}
            variant="outlined"
          >
            Wishlist
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Bookcard;
