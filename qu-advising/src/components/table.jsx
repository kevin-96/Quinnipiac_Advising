import React, { Component } from 'react';
import {
   getUsers,
} from "../services/studentListService";
import { Link } from "react-router-dom";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            students: [
               { id: 1, name: 'Brian ', major: 'Software Engineering', year: 'Junior', valid: true},
               { id: 2, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
               { id: 3, name: 'Brian ', major: 'Software Engineering', year: 'Junior', valid: true},
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true},
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true},
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true},
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: false},
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true},
              
            ],
            users: []
         }
    }

    async componentDidMount() {
      //The data needs to come from the Approved courses list
      const { data } = await getUsers();
      this.setState({users: data});
      console.log(this.state);
    }

    renderTableData() {
        return this.state.users.map((student, index) => {
           const {firstName,lastName,username,id} = student 
           //if(valid){
            return (
               <tr style={{backgroundColor:"white"}}>
                  <td> <Link to={`/AdvisorPage/validator`}>{firstName + " " + lastName} </Link></td>
                  <td>{username}</td>
                  <td>{id}</td>
               </tr>
            )
           //}
         //   else {
         //      return (
         //       <tr style={{backgroundColor:"red"}}>
         //       <td>{name}</td>
         //       <td>{major}</td>
         //       <td>{year}</td>
         //       </tr>
         //      )
         //   }
           
        })
     }
    render() { 
        return ( 
        <table id="table">
        
        <tbody>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>ID Number</th>

        </tr>
                  {this.renderTableData()}
        </tbody>
    </table> );
    }
}
 
export default Table;