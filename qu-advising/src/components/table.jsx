import React, { Component } from 'react';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            students: [
               { id: 1, name: 'Brian ', major: 'Software Engineering', year: 'Junior' },
               { id: 2, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
               { id: 3, name: 'Brian ', major: 'Software Engineering', year: 'Junior' },
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
               { id: 4, name: 'Brian Carballo', major: 'Software Engineering', year: 'Junior' },
              
            ]
         }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const {id,name,major,year} = student //destructuring
           return (
              <tr>
                 <td>{name}</td>
                 <td>{major}</td>
                 <td>{year}</td>
              </tr>
           )
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