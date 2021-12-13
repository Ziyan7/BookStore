import React, { useState } from "react";
import { Grid, TextField, Typography, Button, Paper, FormHelperText } from "@material-ui/core";
import * as Routing from "react-router-dom";
import "../style/forgotpassword.css";
import validation from "../config/validation";
import {forgetPassword} from "../service/signUp.service";
import RainbowText from "react-rainbow-text";

const ForgotPassWord = () => {
    const [UserName, setUserName] = useState("");
    const [emailError, setEmailError] = useState("");

    const emailHandler = (event) => {
        if (validation.email(event.target.value)) {
          setUserName(event.target.value);
          setEmailError("");
        } else {
          setEmailError("Invalid Email");
        }
      };

      const haddleSubmit = (event) => {
        event.preventDefault();
        let data = {
        email: UserName,
        };

        forgetPassword(data)
        .then((result) => {
        console.log("Email sent successfully");
        alert("Email has been sent");
        })
        .catch((error) => {
        alert(error);
        console.log(error);
        });      
      };
  
  let inputStyle = {
    textAlign : "center",
  };

  let helperStyle = {
    marginLeft: "15% ",
    color: "red",
  };

  let headerStyle = {
    marginTop: "60px",
    textAlign: "center",
    fontFamily: "roboto",
  };
  return (
    <form id="forgotpassword-form" >
      <Paper elevation={3} >
      <h2 style={headerStyle}>
          <RainbowText>BookStore</RainbowText>
        </h2>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography style={inputStyle} variant="h5" >
              Find your BookStore password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={inputStyle} >
              Enter your BookStore email
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{marginLeft : "15%" , width : "70%"}}
              autoFocus
              label="Email"
              placeholder="name@gmail.com"
              variant="outlined"
              type="email"
              onChange={(event) => emailHandler(event)}
            />
            <FormHelperText style={helperStyle}>{emailError}</FormHelperText>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Routing.Link} to="/login" color = "primary">
              Back
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button onClick={haddleSubmit} style = {{marginRight :"5%"}} variant="contained" type="submit" color = "primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default ForgotPassWord;
