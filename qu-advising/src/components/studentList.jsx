import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from "./table";
import AddStudentModal from "./modal";
import { getCurrentUser } from "../services/authService"

class StudentList extends Component {


    async componentDidMount() {
       
    }

    state = {
        advisees: getCurrentUser(),
        modalOpen: false,
    }
    handleModalOpen = () => {
        this.setState((prevState) => {
            return {
              modalOpen: !prevState.modalOpen,
            };
          });
    }

    render() {

        return (
            <div id="advisor-bg">
                <Navbar />
                <div className="jumbotron" id="backgroundImage">
                    <div className="container-fluid text-center" id="table-contents">
                        <h1>Advisees</h1>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <Table advisees={this.state.advisees.advisees} />
                            <button className="btn btn-sm round" id="Add-Student" onClick={this.handleModalOpen} /* data-toggle={Modal} data-target="#myModal" */>Add
                        Student</button>

                            <div className="container" id="Schedule-Input" input="file">
                                <h1>Add Schedules</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
                <AddStudentModal modalOpen={this.state.modalOpen}
                    handleModalOpen={this.handleModalOpen} />
            </div>
        );
    }
}

export default StudentList;
