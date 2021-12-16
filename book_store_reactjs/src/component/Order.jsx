import { Button, Grid, Typography  , } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/order.PNG";
import "../style/dashboard.scss";
const Order = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ padding: "90px 30% 0px 35%" }}>
        <img id="order-image" alt="" src={logo} sx={{ width: "90%" }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "0px 30% 2% 30%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography>hurray!!! your order is confirmed</Typography>
        <Typography>
          the order id is #
          {Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}{" "}
          save the order id for
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
      <Grid item xs={12} style={{ padding: "2% 0px 0px 43%" }}>
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
