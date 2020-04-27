import React, { Component } from "react";
import Course from './course';
class AddedCourses extends Component {
    constructor(props) {
        super(props);
        
    };
    render() {
        return (
            <div class="col-lg-6">
                <h2>Added classes</h2>
                <ul class="nav flex-column" id="addedClasses">
                    {this.props.coursesAdded.map((course) => (
                        <Course course={course}/>
                        
                    ))}
            </ul>
            </div>
        );
    };
}

export default AddedCourses;