import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import StudentList from "./components/studentList";
import LoginPage from "./components/loginPage";
import CourseAdderDisplay from "./components/addCourse";
import CourseValidatorDisplay from "./components/courseValidatorDisplay";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log(user);
    this.setState({ user });
  }
    render() {
      const { user } = this.state;
      return (

      <React.Fragment>
        <BrowserRouter>
      <Switch>

      <Route path="/register" component={RegisterForm}></Route>
        <Route path="/AdvisorPage/Validator" component={CourseValidatorDisplay}></Route>
        <Route path="/AdvisorPage" component={StudentList}></Route>
        <Route path="/StudentPage" component={CourseAdderDisplay}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/logout" component={Logout} />
        <Route path="/" component={LoginPage}></Route>
        <Redirect to="/not-found" />
      </Switch>

      </BrowserRouter>
      </React.Fragment>

 );
}
 }


export default App;
