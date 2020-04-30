import React, { Component } from "react";
import CourseAddedDisplay from "./addCourse"
import StudentList from "./studentList"
import{getCurrentUser} from "../services/authService"
class UserDisplay extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isStudent: true
    }

    async componentDidMount() {
        //Database operation to get the user
        const user=await getCurrentUser();
        this.setState({ isStudent: user.isStudent });
    }

    render() {
        if (this.state.isStudent) {
            return (
                <CourseAddedDisplay />
            )
        }
        else {
            return (
                < StudentList />
            )
        };
    }
}

export default UserDisplay;