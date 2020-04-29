import React, { Component } from "react";
import {
    getStudent,
    saveStudent
  } from "../services/userService";
class CourseDropdown extends Component {
    constructor(props) {
        super(props);
        this.onChange=this.onChange.bind(this);
    };
    state =
        {
            courses: [],
            selectedCourse: {}
        };

    onChange(e) {
        const val=e.target.value;
        const selectedCourse=this.state.courses.filter(course=>course.courseNumber==val);
        this.setState({selectedCourse: selectedCourse[0]});
    }

    async componentDidMount() {
        //Last step, get advisors schedule
            const { data } = await getStudent("102513");
            this.setState({courses:data[0].schedule.courses,selectedCourse:data[0].schedule.courses[0]})
          }



    render() {
        return (
            <div class="form-group">
                <label for="selectClass"><strong>Select a Class</strong></label>
                <select class="form-control" id="selectClass" value={this.state.selectedCourse.courseNumber} onChange={this.onChange} >
                    {/* course is a string, not a */}
                    {this.state.courses.map((course,key) => (
                        <option key={key}> {course.courseNumber} </option>
                    ))};
            </select>
                <button class="btn btn-primary mb-2 my-3" type="button" onClick={()=>{
                    this.props.onClick(this.state.selectedCourse)
                }}
                >Add Class</button>
            </div>
        );
    };
}

export default CourseDropdown;
