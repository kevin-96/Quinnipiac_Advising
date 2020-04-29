import React, { Component } from 'react';
import Logo from '../img/logo.png';
import { NavLink } from "react-router-dom";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-default" style={{backgroundColor:"#00263E"}}>
               <ul className="navbar-nav">
                <img src={Logo} width="auto" height="36" alt=""></img>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
            </li>
        </ul>
            </nav>
         );
    }
}
 
export default Navbar;