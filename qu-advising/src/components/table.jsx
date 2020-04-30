import React, { Component } from 'react';
import {
   getUsers,
} from "../services/studentListService";
import {
   getStudentByID,
} from "../services/advisorService";
import { Link } from "react-router-dom";

class Table extends Component {
   constructor(props) {
      super(props);
      this.state = {
         students: [
            // { id: 1, name: 'Brian ', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 2, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 3, name: 'Brian ', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
            // { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: false },
            // { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior', valid: true },
         ],
         users: []
      }
   }

   async componentDidMount() {
      //The data needs to come from the Approved courses list
      const { data } = await getUsers();
      console.log(this.props.advisees);
      this.setState({users: data, students:this.props.advisees});
      console.log(this.state);
      /*const newAdvisees = [];
      for (var i = 0; i < this.props.advisees.length; i++) {
         const id=this.props.advisees[i]
         newAdvisees.push(await getStudentByID(id));
      }
      console.log("bruh"+newAdvisees)
      this.setState({ users: newAdvisees })
      */


   }

   renderTableData() {
      return this.state.users.map((student, index) => {
         const { firstName, lastName, username, id } = student
         if(this.props.advisees.includes(id.toString())){
         return (
            <tr style={{ backgroundColor: "white" }}>
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
         </table>);
   }
}

export default Table;