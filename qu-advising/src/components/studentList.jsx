import React, {Component} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from "./table";
import Modal from "./modal";

class StudentList extends Component{
    
    render() { 
        return ( 
            <div id="advisor-bg">
            <Navbar/>
            <div class="jumbotron" id="jumbotron-advisor">
        <div class="container-fluid text-center" id="table-contents">
            <h1>Advisees</h1>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <Table/>
                <button class="btn btn-sm round" id="Add-Student" data-toggle={Modal} data-target="#myModal">Add
                        Student</button>
                    
                    <div class="container" id="Schedule-Input" input="file">
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
