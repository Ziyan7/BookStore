import "../style/signIn.css";
import RainbowText from "react-rainbow-text";
import * as Routing from "react-router-dom";
import React, { useState } from "react";
import validation from "../config/validation";
import {login} from "../service/signUp.service";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
const Login = () => {
  const [UserName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect,setRedirect] = useState(false)

  const emailHandler = (event) => {
    if (validation.email(event.target.value)) {
      setUserName(event.target.value);
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };

  const passwordHandler = (event) => {
    if (validation.password(event.target.value)) {
      setPassword(event.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Invalid Password");
    }
  };

  const haddleSubmit = () => {
    let data = {
      email: UserName,
      password: password,
    };
    login(data)
      .then((data) => {
        console.log("this a then block")
        sessionStorage.setItem('token', data.message);
        setRedirect(true);
        console.log("this a then block after redirect")
      })  
      .catch((error) => {
        console.log("this is a catch block" + error);
      });
  };

  let headerStyle = {
    marginTop: "60px",
    textAlign: "center",
    fontFamily: "roboto",
  };
  let subHeaderStyle = {
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "roboto",
  };
  let textStyle = {
    width: "110%",
    marginLeft: "55px",
    marginTop: "10px",
    fontFamily: "roboto",
  };

  let helperStyle = {
    marginLeft: "60px ",
    color: "red",
    fontFamily: "roboto",
  };
  
  return (
    <Grid>
      <Paper className="loginStyle">
        <h2 style={headerStyle}>
          <RainbowText>BookStore</RainbowText>
        </h2>
        <h2 style={subHeaderStyle}>Sign in</h2>
        <h3 style={subHeaderStyle}>Use your FundooNotes Account</h3>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Grid>
              <TextField
                autoFocus
                label="Email Id"
                variant="outlined"
                size="small"
                style={textStyle}
                id = "emailId"
                onChange={(event) => emailHandler(event)}
                required
              />
              <FormHelperText style={helperStyle}>{emailError}</FormHelperText>
            </Grid>
            <Grid>
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                id = "password"
                style={textStyle}
                onChange={(event) => passwordHandler(event)}
                required
              />
              <FormHelperText style={helperStyle}>
                {passwordError}
              </FormHelperText>
            </Grid >
            <Grid style = {{ paddingBottom: "20%" }}>
            <Link
            
              component={Routing.Link}
              to="/forgotpassword"
              style={{ paddingLeft: "55px" }}
            >
              Forgot Password?
            </Link>
            </Grid>
          </Grid>
          <Grid  container spacing={9} justifyContent = "center" >
          <Grid item xs={6}>
            <Link
              component={Routing.Link}
              to="/"
              // style={{ paddingLeft: "55px ", paddingRight: "85px " }}
            >
              Create an Account
            </Link>
            </Grid>
            <Grid item xs={4} >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id = "SignIn-btn"
              onClick={haddleSubmit}
            >
              Sign In
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
     {redirect ? <Routing.Redirect to="/dashboard"/> : null}
    </Grid>
  );
};
export default Login;
