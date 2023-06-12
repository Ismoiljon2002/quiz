import React, { useState } from 'react';
import { Alert, Spinner, Modal, Col, InputGroup, Form, Button } from 'react-bootstrap';

import './style/CustomComponentStyles.css';

export const AlertComponent = ({ variant, message, show }) => {
    const style = {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: show ? 'block' : 'none',
        maxWidth: '70%',
        fontSize: 20,
        fontWeight: 600,
    }
    return (
        <Alert key={variant} variant={variant} style={style}>
            {message}
        </Alert>
    );
}

export const LoaderComponent = ({ variant }) => <Spinner animation="border" variant={variant} size='md' />

export const AddUserModalComponent = ({ show, setShow }) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [dob, setDob] = useState('');

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-70w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Add User to the System
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col md="6" className='p-2'>

                    <InputGroup>
                        <InputGroup.Text>First and last name *</InputGroup.Text>
                        <Form.Control aria-label="First name" placeholder='First name' onChange={e => setFirstname(e.target.value)} required />
                        <Form.Control aria-label="Last name" placeholder='Last name' onChange={e => setLastname(e.target.value)} required />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Username *</InputGroup.Text>
                        <Form.Control aria-label="Username" placeholder='Username' onChange={e => setUsername(e.target.value)} required />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Email *</InputGroup.Text>
                        <Form.Control aria-label="Email" type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} required />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Password *</InputGroup.Text>
                        <Form.Control aria-label="Password" type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} required />
                    </InputGroup>
                </Col>
                <Col md="6" className='p-2'>
                    <InputGroup>
                        <InputGroup.Text>Department</InputGroup.Text>
                        <Form.Control aria-label="Department" placeholder='Department' onChange={e => setDepartment(e.target.value)} />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Date of Birth</InputGroup.Text>
                        <Form.Control aria-label="dob" type='date' onChange={e => setDob(e.target.value)} />
                    </InputGroup>

                    <Form.Select aria-label="Set Role">
                        <option>Set a role to the user</option>
                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_PROFESSOR">Professor</option>
                        <option value="ROLE_TA">Teacher Assisstent</option>
                        <option value="ROLE_STUDENT">Student</option>
                    </Form.Select>

                    <InputGroup>
                        <Form.Control className='btn btn-primary' type='submit' value="Submit" />
                    </InputGroup>
                    {/* <Button>Submit</Button> */}
                </Col>
            </Modal.Body>
        </Modal>
    )
}


export default "not exported";