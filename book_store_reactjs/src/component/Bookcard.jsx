import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid
} from "@mui/material";
import bookService from "../service/cart.service";
import { useDispatch } from "react-redux";
import { setCartBooks } from "../action/index.js";
import { useSelector } from "react-redux";

const Bookcard = ({ item }) => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.allBooks.cartBooks);
   const addToCart = () => {
    bookService.addBook(item)
    .then((res) => {
     console.log(res);
     dispatch(setCartBooks(res.cartItem))
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <Card sx={{ height: 345, width: 235 }}>
      <CardMedia
        component="img"
        alt="Loading"
        // height="171"
        style = {{height : "50%" , width : "50%" , paddingLeft : "25%"}}
        image={item.image}
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
      {/* {myCart.forEach((data)=> {
        console.log(data.title)
        console.log(item.title)
      })} */} 
     
       {/* {myCart.forEach((data) => { 
        item.title !== data.title ? 
        (
        <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          fullWidth="true"
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
          fullWidth="true"
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
     
        )
       : 
       (
  
         <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          fullWidth="true"
          style={{
            fontSize: "11px",
            backgroundColor: "#A03037",
            color: "black",
          }}
          onClick={addToCart}
        >
          Added to bag
        </Button>
      </CardActions>
        )
      })} */}

      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          fullWidth="true"
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
          fullWidth="true"
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
     
    </Card>
  );
};

export default Bookcard;
