import React, { Component } from "react";
import {
    getStudent,
    saveStudent
} from "../services/userService";
import{getCurrentUser} from "../services/authService"
class CourseDropdown extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    };
    state =
        {
            courses: [],
            selectedCourse: {}
        };

    onChange(e) {
        const val = e.target.value;
        const selectedCourse = this.state.courses.filter(course => course.courseNumber == val);
        this.setState({ selectedCourse: selectedCourse[0] });
    }

    async componentDidMount() {
        //Last step, get advisors schedule
        const student = await getCurrentUser();

        console.log(student.id);
        var dataPre = await getStudent(student.id + "")
        const data = dataPre.data
        this.setState({ courses: data[0].schedule.courses, selectedCourse: data[0].schedule.courses[0] })
    }



    render() {
        return (
            <div className="form-group">
                <label htmlFor="selectClass"><strong>Select a Class</strong></label>
                <select className="form-control" id="selectClass" value={this.state.selectedCourse.courseNumber} onChange={this.onChange} >
                    {/* course is a string, not a */}
                    {this.state.courses.map((course, key) => (
                        <option key={key}> {course.courseNumber} </option>
                    ))};
            </select>
                <button className="btn btn-primary mb-2 my-3" type="button" onClick={() => {
                    this.props.onClick(this.state.selectedCourse)
                }}
                >Add Class</button>
            </div>
        );
    };
}

export default CourseDropdown;
