import React, { Component } from "react";
class Course extends Component {
    constructor(props)
    {
        super(props)
        console.log(this.props.course.courseNumber)
    }
    render() {
        return (
            <div class="bg-primary rounded my-2">
            <h3>{this.props.course.courseNumber}</h3>
            </div>
        );
    };
}

export default Course;
