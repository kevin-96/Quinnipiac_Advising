import { Component } from "react";
import auth from "../services/authService";
class Logout extends Component {
  async componentDidMount() {
    auth.logout();
    window.location.href = "http://localhost:3000";
    console.log("recieved");
  }

  render() {
    return null;
  }
}

export default Logout;
