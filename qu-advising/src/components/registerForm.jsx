import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../services/regService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", firstname: "", lastname: "", id:'' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("E-mail"),
    password: Joi.string().required().min(5).label("Password"),
    firstname: Joi.string().required().label("Firstname"),
    lastname: Joi.string().required().label("Lastname"),
    id: Joi.string().required().label("StudentID")
  };

  doSubmit = async () => {
    try {
      console.log(this.state.data)
      const response = await userService.register(this.state.data);
      console.log(this.state.data.id)
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "E-mail")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("id", "StudentID")}
          {this.renderInput("firstname", "Firstname")}
          {this.renderInput("lastname", "Lastname")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
