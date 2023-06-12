import React, { useState } from 'react';
import { Button, Card, Col, Table, Row } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import { BASE_URL } from '../baseURL';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

function UserListCard({ addUser, setAddUser, users, userTitle }) {

    const [fileData, setFileData] = useState([]);


    const submitUsersList = (fd) => {
    
        if (fd.length > 0) {
            axios.post(`${BASE_URL}/admin/addUserList`, {
                fd
            })
                .then(res => console.log("addUsersList", res))
                .catch(err => console.warn(err))
        }
    }

    const deleteUser = (id, role) => {
        if (role === "ROLE_ADMIN") {
            axios.delete(`${BASE_URL}/admin/deleteadmin/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.warn(err))
        } else {

        }
    }


    const laodFile = (e) => {
        if (fileData.length === 0) {
            const file = e.target.files[0];

            const promise = new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsArrayBuffer(file);

                fileReader.onload = (e) => {
                    const bufferArray = e.target.result;
                    const wb = XLSX.read(bufferArray, { type: 'beffer' });

                    const ws = wb.Sheets[wb.SheetNames[0]]
                    const data = XLSX.utils.sheet_to_json(ws);
                    resolve(data);
                }

                fileReader.onerror = (err) => { reject(err); console.warn(err) };
            })
                .then(d => setFileData(d))
        } else setFileData([])
    }

    return (
        <Card >
            <h3>{userTitle}</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        {userTitle !== "Admins" && <>
                            <th>Full name</th>
                            <th>Password</th>
                            <th>Date of Birth</th>

                        </>}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {userTitle !== "Admins" && <>
                                <td>{user.first_name} {user.last_name} </td>
                                <td>{user.password}</td>
                                <td>{user.dob}</td>
                            </>}
                            <td>
                                <Button variant='danger' onClick={() => {deleteUser(user.id, user.role)}}>
                                    <MdDelete size={20} />
                                </Button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

            <Row>

                {userTitle !== "Admins" && <Col md="6">
                    <div className="draggable-container">
                        <input type="file"
                            accept=".xlsx" multiple={false}
                            onChange={e => laodFile(e)}
                            onDragOver={e => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        />
                        <Button>
                            <BsFillCloudUploadFill className='mx-2' size={20} />
                            {fileData.length === 0 ? "Upload Excel File" : "Remove the file"}
                        </Button>
                        <h4>{fileData.length === 0 ? "Drag&Drop your file here" : "File Uploaded"}</h4>
                    </div>
                </Col>}
                <Col md="6">
                    <Button onClick={() => setAddUser(!addUser)} > <IoMdAdd size={20} /> Add a user </Button>
                </Col>
            </Row>

            {fileData.length > 0 && <>
                <Table striped style={{ width: "80%", margin: "10px auto" }}>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Full name</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Date of Birth</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fileData.map((d, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{d.first_name} {d.last_name} </td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>{d.dob}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>

                <Button onClick={() => submitUsersList(fileData)} className='mx-auto'>Submit the list</Button>
            </>

            }

            {/* <Button variant="primary" onClick={addStudent} >Add a Student</Button>
            <Button variant="primary" onClick={addProfessor} >Add a Professor</Button> */}
        </Card>
    );
}

export default UserListCard;