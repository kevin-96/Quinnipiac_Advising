import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../services/authService";


class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async (response) => {
    try {
      
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const user=auth.getCurrentUser();
      const isStudent=user.isStudent
      console.log(isStudent);
      //const { state } = this.props.location;
      if(isStudent==true)
      {
        window.location="/StudentPage"
      }
      else{
        window.location="/AdvisorPage"
      }

    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/AdvisorPage" />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
