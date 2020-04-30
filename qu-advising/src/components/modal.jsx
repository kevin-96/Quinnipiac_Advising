import React, { Component } from 'react';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content"> 
                        
                        <div className="modal-header">
                            <h4 className="modal-title">Create Student</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Student Name</label>
                                        <input className="form-control" id="inputName" placeholder="Enter Name"></input>
                                    </div>
                                    <label htmlFor="inputEmail">Student Email address</label>
                                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">Please verify email before creating account.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Temporary Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Create</button>
            </div>
                    </div>
                </div>
            </div>
                );
    }
}
 
export default Modal;