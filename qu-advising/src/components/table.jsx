import React, { Component } from 'react';
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
              
            ]
         }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const {id,name,major,year,valid} = student 
           if(valid){
            return (
               <tr style={{backgroundColor:"green"}}>
                  <td>{name}</td>
                  <td>{major}</td>
                  <td>{year}</td>
               </tr>
            )
           }
           else {
              return (
               <tr style={{backgroundColor:"red"}}>
               <td>{name}</td>
               <td>{major}</td>
               <td>{year}</td>
               </tr>
              )
           }
           
        })
     }
    render() { 
        return ( 
        <table id="table">
        
        <tbody>
        <tr>
            <th>Student</th>
            <th>Major</th>
            <th>Year</th>

        </tr>
                  {this.renderTableData()}
        </tbody>
    </table> );
    }
}
 
export default Table;