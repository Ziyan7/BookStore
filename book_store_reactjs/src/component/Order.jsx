import { Button, Grid, Typography  , } from "@mui/material";
import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/order.PNG";
import "../style/dashboard.scss";
import { useSelector } from "react-redux";
import {getOrderId} from "../service/order.service";
const Order = () => {
  const myOrderId = useSelector((state) => state.allBooks.orderId);
  const [orderDetails , setOrderDetails] = useState(null)

  useEffect(() => {
    getOrderId(myOrderId)
      .then((res) => {
        console.log(res.data.orderId)
        setOrderDetails(res.data.orderId);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  return (
    <Grid container container
    spacing={0}
    direction="column"
    alignItems="center"
   >
      <Grid item xs={12} sx={{ paddingTop: "90px " }} >
        <img id="order-image" alt="Order Placed Successfully" src={logo} display = "block"  margin-left = "auto" margin-right = "auto"/>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          paddingBottom: "2%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography>hurray!!! your order is confirmed</Typography>
        <Typography>
          the order id is #{orderDetails} save the order id for
        </Typography>
        <Typography>further communication...</Typography>
      </Grid>
      <Grid item xs={12}>
        <table
          border="1"
          border-color="#DCDCDC"
          cellpadding="15"
          cellspacing="0"
          align="center"
          width={"70%"}
        >
          <tr>
            <th>Email us</th>
            <th>Contact us</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>admin@bookstore.com</td>
            <td>7788996611</td>
            <td>
              15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom
              restaurant, HSR Layout, Bangalore 560034
            </td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: "2%" }}>
        <Button
          style={{ backgroundColor: "#3371B5", color: "white" }}
          component={Link}
          to="/dashboard"
        >
          Continue Shopping
        </Button>
      </Grid>
    </Grid>
  );
};

export default Order;
