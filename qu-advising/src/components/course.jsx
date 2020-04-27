import React, { Component } from "react";
class Course extends Component {
    constructor(props)
    {
        super(props)
        console.log("Reached")
    }
    render() {
        return (
            <h3>{this.props.course} Added! </h3>
        );
    };
}

export default Course;
