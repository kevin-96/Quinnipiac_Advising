import React, { Component } from "react";
import CourseDropdown from './courseDropdown';
import AddedCourses from './addedCourses'

import Footer from "./footer";
import Navbar from "./navbar";
class CourseAddedDisplay extends Component {
  constructor(props){
    super(props)
    this.state={addedCourses:[]}
  }
  state = {
    addedCourses: [],
  }
  handleClick = (course) => {
    this.setState({addedCourses: [course,...this.state.addedCourses]})
  }

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