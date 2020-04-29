import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import StudentList from "./components/studentList";
import LoginForm from "./loginForm";
import CourseAdderDisplay from "./components/addCourse";
import CourseValidatorDisplay from "./components/courseValidatorDisplay";

import './App.css';

 function App() {

    return (
      <React.Fragment>
        <BrowserRouter>
      <Switch>
        <Route path="/AdvisorPage/Validator" component={CourseValidatorDisplay}></Route>
        <Route path="/AdvisorPage" component={StudentList}></Route>
        <Route path="/StudentPage" component={CourseAdderDisplay}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/" component={CourseAdderDisplay}></Route>
        <Redirect to="/not-found" />
      </Switch>

      </BrowserRouter>
      </React.Fragment>

 );
}


export default App;
