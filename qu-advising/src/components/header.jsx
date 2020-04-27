import React from "react";
import Logo from "../img/logo.png";

const Header = () => {
  return <div className="logo" style={{backgroundColor:"#00263E"}} align="center">
  <img src={Logo} alt="Site Logo" width="auto" height="50"/>
</div>
};

export default Header;
