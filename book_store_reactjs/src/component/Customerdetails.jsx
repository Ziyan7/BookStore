import {
  Button,
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import "../style/dashboard.scss";
import {useEffect , useState} from "react"
import {getCustomerDetails,addCustomerDetails} from "../service/cart.service";
import OrderSummary from "./OrderSummary";
import "../style/dashboard.scss"
const Customerdetails = ({ visible, setVisibility  }) => {

  const initialUserState = {
    name: "",
    phoneNumber: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    landmark: "",
    type: "Home",
  };
  const [details, setDetails] = useState(initialUserState);
  const [orderVisibility , setOrderVisibility] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
      getCustomerDetails()
        .then((res) => {
          setDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const handleUpdate = () => {
    const data = {
    name: details.name,
    phoneNumber:details.phoneNumber,
    pincode: details.pincode,
    locality: details.locality,
    address: details.address,
    city: details.city,
    landmark: details.landmark,
    type: details.type,
    }
   addCustomerDetails(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Grid sx={{ width: "68.2%" }}>
      {visible === false ? (
        <Grid
        id = "customer-layout"
          item
          container
          style={{
            border: "1px solid ",
            borderColor: "#DCDCDC",
            margin: "30px 0px 0px 0px",
            padding: "2%",
          }}
        >
          <Typography>Customer Details</Typography>
        </Grid>
      ) : (
        <Grid
        id = "customer-layout"
          item
          container
          fullWidth
          sx={{
            border: "1px solid ",
            borderColor: "#DCDCDC",
            margin: "30px 0px 0px 0px",
            padding: "3%",
          }}
        >
          <Grid item xs={12}>
            <Typography>Customer Details</Typography>
            <Grid item container xs={10} spacing={1.5}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  placeholder="Phone Number"
                  type="text"
                  name="phoneNumber"
                  variant="outlined"
                  fullWidth
                  value={details.phoneNumber}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="pincode"
                  name="pincode"
                  placeholder="Pincode"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.pincode}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="locality"
                  name="locality"
                  placeholder="Locality"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.locality}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  name="address"
                  placeholder="Address"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="city"
                  name="city"
                  placeholder="City/town"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.city}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="landmark"
                  name="landmark"
                  placeholder="Landmark"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.landmark}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} align="left">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Type</FormLabel>
                  <RadioGroup row aria-label="gender" defaultValue="Home">
                    <FormControlLabel
                      name="type"
                      value="Home"
                      control={<Radio />}
                      label="Home"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="type"
                      value="Work"
                      control={<Radio />}
                      label="Work"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="type"
                      value="Other"
                      control={<Radio />}
                      label="Other"
                      onChange={handleInputChange}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" onClick={() => {setVisibility(false) ; handleUpdate() ; setOrderVisibility(true)}}>
                Continue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      <OrderSummary orderVisibility = {orderVisibility}/>
    </Grid>
  );
};

export default Customerdetails;
