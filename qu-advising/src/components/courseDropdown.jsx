import React, { Component } from "react";
class CourseDropdown extends Component {
    constructor(props) {
        super(props);
        this.onChange=this.onChange.bind(this);
    };
    state =
        {
            courses: ["SER230", "SER240", "SER420"],
            selectedCourse: "SER230"
        };

    onChange(e) {
        this.setState({selectedCourse: e.target.value})
    }

    render() {
        return (

            <div class="form-group">
                <label for="selectClass"><strong>Select a Class</strong></label>
                <select class="form-control" id="selectClass" value={this.state.selectedCourse} onChange={this.onChange} >
                    {/* course is a string, not a */}
                    {this.state.courses.map((course) => (
                        <option> {course} </option>
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
