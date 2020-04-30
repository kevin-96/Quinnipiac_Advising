import React, { Component } from "react";
import { deleteCourse } from "../services/addClassService"
class Course extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        isLiving: true
    }
    handleDelete = async (course) => {
        try {
          await deleteCourse("102513",course.courseNumber);
          this.setState({ isLiving: false })
        } catch (ex) {
          console.log("delete exception");
          if (ex.respond && ex.respond.status === 404)
            alert("This recipe had already been deleted");
          this.setState({isLiving:true});
        }

       };
    render() {
        if (this.state.isLiving) {
            return (
                <div className="bg-primary rounded my-2 px-auto py-3 d-flex flex-row  ">
                    <div className="col-2 my-auto bg-warning rounded">
                    <span>{this.props.course.courseName}</span>
                    </div>
                    <div className="col-2 my-auto">
                    <span >{this.props.course.courseNumber}</span>
                    </div>
                    <div className="col-2 my-auto">
                    <span >{this.props.course.instructor}</span>
                    </div>
                    <div className="col-2 my-auto">
                    <span >Credits:{this.props.course.numCredit}</span>
                    </div>
                    <div className="col-2 my-auto">
                    <span >{this.props.course.semesterOffered}</span>
                    </div>
                    <div className="col-2 my-auto">
                    <button className="btn btn-danger mb-2 my-auto "  type="button" onClick={() => {
                  this.handleDelete(this.props.course);
                }}
                    >Delete</button>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    };
}

export default Course;
