import React, { Component } from 'react';
import {
   getUsers,
} from "../services/studentListService";
import { Link } from "react-router-dom";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            students:[102513,102030],
            users: []
         }
    }

    async componentDidMount() {
      //The data needs to come from the Approved courses list
      const { data } = await getUsers();
      this.setState({users: data, //students:user.advisees
      });
      console.log(this.state);
    }

    renderTableData() {
        return this.state.users.map((student, index) => {
           const {firstName,lastName,username,id} = student 
           if(this.state.students.includes(id)){
            return (
               <tr style={{backgroundColor:"white"}}>
                  <td> <Link to={`/AdvisorPage/validator`}>{firstName + " " + lastName} </Link></td>
                  <td>{username}</td>
                  <td>{id}</td>
               </tr>
            )
           }
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