import "../style/signIn.css";
import RainbowText from "react-rainbow-text";
import * as Routing from "react-router-dom";
import React, { useState } from "react";
import validation from "../config/validation";
import { login } from "../service/signUp.service";
import {
  Box,
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A03037",
    },
    "& label.Mui-focused": {
      color: "#A03037",
    },
  },
  
paperRoot: {
  backgroundColor: 'red'
}
});

const Login = () => {
  const classes = useStyles();
  const [UserName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
        console.log("this a then block");
        sessionStorage.setItem("token", data.message);
        setRedirect(true);
        console.log("this a then block after redirect");
      })
      .catch((error) => {
        console.log("this is a catch block" + error);
      });
  };

  let headerStyle = {
    marginTop: "60px",
    textAlign: "center",
    fontFamily: "roboto",
    color: "#A03037",
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
    <Grid >
      <Paper elevation={5} className="loginStyle" >
        <h2 style={headerStyle}>BookStore</h2>
        <h2 style={subHeaderStyle}>Sign in</h2>
        <h3 style={subHeaderStyle}>Use your FundooNotes Account</h3>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Grid>
              <TextField
                className={classes.root}
                autoFocus
                label="Email Id"
                variant="outlined"
                size="small"
                style={textStyle}
                id="emailId"
                onChange={(event) => emailHandler(event)}
                required
              />
              <FormHelperText style={helperStyle}>{emailError}</FormHelperText>
            </Grid>
            <Grid>
              <TextField
                className={classes.root}
                label="Password"
                variant="outlined"
                size="small"
                 type={showPassword ? "text" : "password"}
                id="password"
                style={textStyle}
                onChange={(event) => passwordHandler(event)}
                required
              />
              <FormHelperText style={helperStyle}>
                {passwordError}
              </FormHelperText>
            </Grid>
            <Grid  >
            <FormControlLabel
             style={{ paddingLeft: "55px" }}
              control={<Checkbox />}
              label={
                <Box component="div" fontSize={12} fontWeight={"bold"}>
                   Show password
                 </Box>
           }
              onClick={handleShowPassword}
            />
          </Grid>
            <Grid style={{ paddingBottom: "16%" }}>
              <Link
                component={Routing.Link}
                to="/forgotpassword"
                style={{ paddingLeft: "55px", color: "#A03037" , fontWeight : "600"}}
              >
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={9} justifyContent="center">
            <Grid item xs={6}>
              <Link
                style={{ color: "#A03037" , fontWeight : "600"}}
                component={Routing.Link}
                to="/"
                // style={{ paddingLeft: "55px ", paddingRight: "85px " }}
              >
                Create an Account
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Button
              size = "fixed"
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#A03037" }}
                color="primary"
                id="SignIn-btn"
                onClick={haddleSubmit}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {redirect ? <Routing.Redirect to="/dashboard" /> : null}
    </Grid>
  );
};
export default Login;
