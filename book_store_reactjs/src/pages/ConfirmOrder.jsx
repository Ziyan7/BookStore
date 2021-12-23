import { Grid, Box } from "@mui/material";
import Order from "../component/Order";
import AppBar from "../component/Appbar";
import { Redirect } from "react-router";
const ConfirmOrder = () => {
  const token = sessionStorage.getItem("token");
  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
    return (
      <Box>
        <AppBar />
        <Order />
      </Box>
    );
  }
};
export default ConfirmOrder;
