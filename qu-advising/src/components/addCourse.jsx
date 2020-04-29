import React, { Component } from "react";
import CourseDropdown from './courseDropdown';
import AddedCourses from './addedCourses'

import Footer from "./footer";
import Navbar from "./navbar";
import {
  getStudent,
} from "../services/userService";

import { addCourse } from "../services/addClassService";
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
        const { data } = await getStudent("102513");
        this.setState({addedCourses:data[0].schedule.courses,student:data[0]});
        console.log(this.state.student);
      }

  handleClick = (course) => {
    this.setState({addedCourses: [course,...this.state.addedCourses],student:this.state.student})
    this.handleAdd(course);
  }

  handleAdd = async (course) => {
    console.log(this.state.student._id)
    const {data} = await addCourse(course, "102513");
  };

  render() {
    return (
      <div>
        <Navbar/>
      <div class="jumbotron" id="backgroundImage">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="text-center">Add Classes</h1>
            </div>
          </div>
          {/*Contains a form, that once submitted, will append the added class-->*/}
          <form>
            <div class="row">
              <div class="col-lg-6">
                <CourseDropdown onClick={this.handleClick}/>
              </div>
              <AddedCourses coursesAdded={this.state.addedCourses}/>
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