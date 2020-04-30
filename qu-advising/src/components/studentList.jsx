import React, {Component} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from "./table";
import Modal from "./modal";
import{getCurrentUser} from "../services/authService"

class StudentList extends Component{

    async componentDidMount()
    {
    
    }

    state={
        advisees:getCurrentUser()
    }
    
    render() { 
        
        
        return ( 
            <div id="advisor-bg">
            <Navbar/>
            <div className="jumbotron" id="backgroundImage">
        <div className="container-fluid text-center" id="table-contents">
            <h1>Advisees</h1>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <Table advisees={this.state.advisees.advisees}/>
                <button className="btn btn-sm round" id="Add-Student" data-toggle={Modal} data-target="#myModal">Add
                        Student</button>
                    
                    <div className="container" id="Schedule-Input" input="file">
                        <h1>Add Schedules</h1>
                    </div>
                   
                    </div>
            </div>
            </div>
            <Footer/>
            <Modal/>
            </div>
         );
    }
}

export default StudentList;
