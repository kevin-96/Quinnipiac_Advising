import React, { Component } from 'react';
import Logo from '../img/logo.png';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar navbar-default" style={{backgroundColor:"#00263E"}}>
               <ul class="navbar-nav">
                <img src={Logo} width="auto" height="36"></img>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
            </li>
        </ul>


            </nav>
         );
    }
}
 
export default Navbar;