import React, {useContext, useState} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";

const CreateCourse  = ({show, onHide}) => {

    return (
        <Modal show={show} onHide={onHide} centered style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    );
};

export default CreateCourse;