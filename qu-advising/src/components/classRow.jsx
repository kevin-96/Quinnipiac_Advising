import React, { Component } from "react";
class ClassRow extends Component {
    constructor(props) {
        super(props);
        this.state=({studentCourse : this.props.studentCourse , 
            agreedCourse : this.props.agreedCourse});
        console.log(this.state.studentCourse);
    };
    state = {
        studentCourse: "",
        agreedCourse: "",
    };
    render() {
        if (this.state.studentCourse === this.state.agreedCourse) {
            return (
                <tr style={{backgroundColor:"green"}}>
                    <td> {this.state.agreedCourse}</td>
                    <td> {this.state.studentCourse}</td >
                </tr>
            );
        }
        else {
            return (<tr style={{backgroundColor:"red"}}>
                <td> {this.state.agreedCourse}</td>
                <td> {this.state.studentCourse}</td >
            </tr>)
        }
    };
}

export default ClassRow;
