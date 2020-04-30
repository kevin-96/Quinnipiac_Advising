import React, { Component } from "react";
import CourseDropdown from './courseDropdown';
import AddedCourses from './addedCourses'

import Footer from "./footer";
import Navbar from "./navbar";
import {
  getStudent,
} from "../services/userService";
import{deleteCourse} from "../services/addClassService"

import { addCourse } from "../services/addClassService";
import{getCurrentUser} from "../services/authService"
class CourseAddedDisplay extends Component {
  constructor(props){
    super(props)
  }
  state = {
    addedCourses: [],
    student: []
  }

  async componentDidMount() {
        //The data needs to come from the Approved courses list
        const student = await getCurrentUser();

        console.log(student.id);
        var dataPre = await getStudent(student.id+"")
        const data=dataPre.data
        this.setState({addedCourses:data[0].schedule.courses,student:student});
      }

  handleClick = async (course) => {
    console.log(course)
    this.setState({addedCourses: [course,...this.state.addedCourses],student:this.state.student})
    this.handleAdd(course);
  }

  handleAdd = async (course) => {
    const {data} = await addCourse(course, this.state.student.id);
  };

  render() {
    return (
      <div>
        <Navbar/>
      <div className="jumbotron" id="backgroundImage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Add Classes</h1>
            </div>
          </div>
          {/*Contains a form, that once submitted, will append the added class-->*/}
          <form>
            <div className="row">
              <div className="col-lg-2">
                <CourseDropdown onClick={this.handleClick}/>
              </div>
              <AddedCourses coursesAdded={this.state.addedCourses} studentID={this.state.student.id+""}/>
            </div>
          </form>
        </div>
      </div >
      <Footer/>
      </div>
    );
  }
}

export default CourseAddedDisplay;