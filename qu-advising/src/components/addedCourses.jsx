import React, { Component } from "react";
import Course from './course';
class AddedCourses extends Component {
    constructor(props) {
        super(props);
    }
    state={
        coursesAdded:[],
        studentID:""
    }
   async componentDidMount()
   {
       console.log(this.props)
       this.setState({coureseAdded:this.props.coursesAdded,studentID:this.props.studentID});
   }
    render() {
        return (
            <div class="col-lg-10 bg-secondary rounded float-left">
                <h2>Schedule</h2>
                <ul id="addedClasses">
                    {this.props.coursesAdded.map((course,key) => (
                        <Course key={key} course={course} studentID={this.state.studentID}/>
                    ))}
            </ul>
            </div>
        );
    };
}

export default AddedCourses;