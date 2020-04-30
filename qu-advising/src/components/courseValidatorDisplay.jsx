import React, { Component } from "react";
import ClassRow from "./classRow";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import {
    getStudent
  } from "../services/userService";

class CourseValidatorDisplay extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        studentCourses: [],
        agreedCourses: []
    };

    async componentDidMount() {
    //Last step, get advisors schedule
        //console.log(this.props.location.params.id)
        var id = this.props.location.state.id
        var { data } = await getStudent(id);
        console.log(data)
        if(data != null){
            this.setState({studentCourses:data[0].schedule.courses,agreedCourses:data[0].schedule.courses});
        }
        
      }

    render() {
        return (
            <div>
            <Navbar/>
            <div className="jumbotron" id="backgroundImage">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center">Class Validator</h1>
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Classes Agreed Upon</th>
                                    <th scope="col">Student's Schedule</th>
                                </tr>
                            </thead>
                            <tbody id="table_classes">
                                {this.state.agreedCourses.map((val, index) => (
                                    <ClassRow studentCourse={this.state.studentCourses[index].courseNumber}
                                        agreedCourse={this.state.agreedCourses[index].courseNumber} />
                                ))}
                    </tbody>

                        </table>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
        );
    }
}

export default CourseValidatorDisplay;