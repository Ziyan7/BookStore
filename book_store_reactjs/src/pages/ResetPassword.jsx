import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  FormHelperText,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import "../style/forgotpassword.css";
import validation from "../config/validation";
import { resetPassword } from "../service/signUp.service";

const ResetPassWord = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { token } = useParams();

  const passwordHandler = (event) => {
    if (validation.password(event.target.value)) {
      setPassword(event.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Invalid Password");
    }
  };

  const haddleSubmit = (event) => {
    event.preventDefault();
    let data = {
      newPassword: password,
    };
    console.log(data);
    console.log(token);
    resetPassword(data, token)
      .then((result) => {
        console.log(result.data);
        alert("Password Changed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let inputStyle = {
    textAlign: "center",
  };

  let helperStyle = {
    marginLeft: "15% ",
    color: "red",
  };

  return (
    <form id="forgotpassword-form">
      <Paper elevation={3}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography style={inputStyle} variant="h5">
              Reset your BookStore password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={inputStyle}>
              Enter your New BookStore password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "15%", width: "70%" }}
              autoFocus
              label="Password"
              variant="outlined"
              type="password"
              onChange={(event) => passwordHandler(event)}
            />
            <FormHelperText style={helperStyle}>{passwordError}</FormHelperText>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/login" color="primary">
              Back
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button
              onClick={haddleSubmit}
              style={{ marginRight: "5%" }}
              variant="contained"
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default ResetPassWord;
