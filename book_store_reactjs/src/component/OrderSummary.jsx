import {
    Button,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Stack
  
  } from "@mui/material";
  import { useSelector } from "react-redux";
  import * as Routing from "react-router-dom";
  import "../style/dashboard.scss";
  import orderService from "../service/order.service";
  
  const OrderSummary = ({ orderVisibility }) => {
    const myCart = useSelector((state) => state.allBooks.cartBooks);
const orderDetails = () => {
let orderId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
 myCart.map((order) => {
   let amount = (order.price * order.numberOfBooks);
   const data = {
    orderId :  orderId,
    title : order.title ,
    totalAmount : amount ,
    status : "Order Confirm",
   }
     orderService.addOrder(data)
     .then ((res) => {
       console.log(res)
     })
     .catch((error) => {
       console.log(error)
     })

 })
}
  
    return (
      <Grid >
        {orderVisibility === false ? (
          <Grid
          id = "order-layout"
            item
            container
            style={{
              border: "1px solid ",
              borderColor: "#DCDCDC",
              margin: "27px 0px 0px 0px",
              padding: "2%",
            }}
          >
            <Typography>Order Summary</Typography>
          </Grid>
        ) : (   
          <Grid
          id = "order-layout"
          item
          container
          sx={{
            border: "1px solid ",
            borderColor: "#DCDCDC",
            margin: "30px 0px 0px 0px",
            padding: "2%",
          }}
        >
          <Typography>Order Summary</Typography>
          {myCart.map((book, index) => (
            <Grid item xs={12} >
              <Card
              id = "cart-card"
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
                        Rs.{book.price * book.numberOfBooks} 
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} align="right">
              <Button variant="contained" component={Routing.Link} to="/order"  onClick={orderDetails}>
                CHECKOUT
              </Button>
            </Grid>
        </Grid>
        )}
      </Grid>
    )
  };
  
  export default OrderSummary;
  