import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RegisterForm from "./registerForm";

const AddStudentModal = (props) => {
    return (
        <>
            <Modal 
                show={props.modalOpen}
                onHide={props.handleModalOpen}
                id="myModal"
                > 
            <Modal.Header>
                <Modal.Title>Create Student Account</Modal.Title>

                            <buttonClose type="button" class="close" data-dismiss="modal" onClick = {props.handleModalOpen}><span>&times;</span></buttonClose>
            </Modal.Header>

            <Modal.Body>
                <div className="container">
                    <RegisterForm />
                </div>
            </Modal.Body>

            <Modal.Footer>
            <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
            </Modal.Footer>

            </Modal>
        </>

    );
};
export default AddStudentModal;
           

