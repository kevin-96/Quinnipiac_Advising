import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import StudentList from "./components/studentList";
import LoginForm from "./loginForm";
import CourseAdderDisplay from "./components/addCourse";
import CourseValidatorDisplay from "./components/courseValidatorDisplay";

import './App.css';

 function App() {
    
    return (
      <React.Fragment>
      <Switch>
        <Route path="/" component={CourseAdderDisplay}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found" />
      </Switch>
      </React.Fragment>
    
 );
}


export default App;