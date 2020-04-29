import { Component } from "react";
import auth from "../services/authService";
class Logout extends Component {
  componentDidMount() {
    console.log("Hello");
    auth.logout();
    window.location = "/";
    console.log("recieved");
  }

  render() {
    return null;
  }
}

export default Logout;
