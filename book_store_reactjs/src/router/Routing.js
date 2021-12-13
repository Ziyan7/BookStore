import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Cartitem from "../component/Cartitem";
const Routing = () =>{
    return (
        <div className="App">
        <Router>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword"  component={ForgotPassword} />
          <Route path="/reset/:token"  component={ResetPassword} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/cart"  component={Cartitem} />
        </Router>
      </div>
    );
};
export default Routing