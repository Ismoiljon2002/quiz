import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BASE_URL } from '../../baseURL';
import { AddUserModalComponent } from '../../components/CustomComponents';
import UserListCard from '../../components/UserListCard';
import Cookies from 'universal-cookie';


function AdminDashboard() {
    const cookies = new Cookies();
    const [ addUser, setAddUser ] = useState(false);

    const [ studentList, setStudentList ] = useState([])
    const [ TAList, setTAList ] = useState([])
    const [ professorList, setProfessorList ] = useState([])
    const [ adminList, setAdminList ] = useState([])

    useEffect(() => {
        // if (!cookies.get("userLists"))
            axios.get(`${BASE_URL}/admin/getUsers`)
            .then(res => {
                console.log("users", res.data)
                const professors = res.data.filter(u => u.role === "ROLE_PROFESSOR");
                const TAs = res.data.filter(u => u.role === "ROLE_TA");
                const students = res.data.filter(u => u.role === "ROLE_STUDENT");

                setProfessorList(professors);
                setTAList(TAs);
                setStudentList(students);
            })
        // else {
            // setProfessorList();
            // setTAList(TAs);
            // setStudentList(students);
        // }
        if (!cookies.get("adminList")) 
            axios.get(`${BASE_URL}/admin/getAdmins`)
            .then(res => {
                setAdminList(res.data)
            }).catch(err => {
                console.warn(err)
            })
        else setAdminList(cookies.get("adminList"))
    }, [])


    return (
        <div className="dashboard admin">

            <AddUserModalComponent show={addUser} setShow={setAddUser}/>

            <Container>

                <UserListCard addUser={addUser} setAddUser={setAddUser} users={adminList} userTitle={"Admins"} />
                <br />
                <UserListCard addUser={addUser} setAddUser={setAddUser} users={professorList} userTitle={"Professors"} />
                <br />
                <UserListCard addUser={addUser} setAddUser={setAddUser} users={TAList} userTitle={"Teacher Assisstents"} />
                <br />
                <UserListCard addUser={addUser} setAddUser={setAddUser} users={studentList} userTitle={"Students"} />

            </Container>
        </div>
    );
}

export default AdminDashboard;