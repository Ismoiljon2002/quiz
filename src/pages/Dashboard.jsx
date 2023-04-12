import React, { useState, useEffect, useContext } from 'react';
import NavbarComponent from '../components/Navbar';
import { UserContext } from '../context/UserContext';

import AdminDashboard from './roles/AdminDashboard';
import ProfessorDashboard from './roles/ProfessorDashboard';
import StudentDashboard from './roles/StudentDashboard';

function Dashboard() {

    const { user } = useContext(UserContext);
    console.log(user, "user")

    switch (user?.role) {
        case "admin":
            return (
                <>
                    {/* <NavbarComponent /> */}
                    <AdminDashboard />
                </>
            );
        case "professor":
            return (
                <>
                    {/* <NavbarComponent /> */}
                    <ProfessorDashboard />
                </>
            );
        case "student":
            return (
                <>
                    {/* <NavbarComponent /> */}
                    <StudentDashboard />
                </>
            );
                
        default:
            return <h1>Something is wrong</h1>
    }
}

export default Dashboard;