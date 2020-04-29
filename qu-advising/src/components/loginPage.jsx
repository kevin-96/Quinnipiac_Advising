import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import LoginForm from "./loginForm";


class LoginPage extends Component{
    

  render() {
    return (
      <header id="home-section">
        <Header/>
		<div className="dark-overlay">
    <div className="container" id="centerPage">
				<div className="container">
					<label><h2><b>Advising System Login</b></h2></label>
				</div>
      <div className="container">
      <LoginForm/> 
      </div>
      </div>
      </div>
      <Footer/>
		</header>
    );
  }
}

export default LoginPage;
