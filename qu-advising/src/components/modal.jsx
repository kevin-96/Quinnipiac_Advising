import React, { Component } from 'react';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content"> 
                        
                        <div class="modal-header">
                            <h4 class="modal-title">Create Student</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="inputName">Student Name</label>
                                        <input class="form-control" id="inputName" placeholder="Enter Name"></input>
                                    </div>
                                    <label for="inputEmail">Student Email address</label>
                                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"placeholder="Enter email"></input>
                                    <small id="emailHelp" class="form-text text-muted">Please verify email before creating account.</small>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Temporary Password</label>
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                                </div>
                            </form>
                        </div>

                        <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Create</button>
            </div>
                    </div>
                </div>
            </div>
                );
    }
}
 
export default Modal;