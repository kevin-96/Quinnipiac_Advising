import React, { Component } from "react";
import ClassRow from "./classRow";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

class CourseValidatorDisplay extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        studentCourses: ["SER230","SER330"],
        agreedCourses: ["SER240","SER330"]
    };

    render() {
        return (
            <div>
            <Navbar/>
            <div class="jumbotron" id="backgroundImage">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center">Class Validator</h1>
                </div>
            </div>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Classes Agreed Upon</th>
                                    <th scope="col">Student's Schedule</th>
                                </tr>
                            </thead>
                            <tbody id="table_classes">
                                {this.state.agreedCourses.map((val, index) => (
                                    <ClassRow studentCourse={this.state.studentCourses[index]}
                                        agreedCourse={this.state.agreedCourses[index]} />
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