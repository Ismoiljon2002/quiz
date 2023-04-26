import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import AdminDashboard from './roles/AdminDashboard';
import ProfessorDashboard from './roles/ProfessorDashboard';
import StudentDashboard from './roles/StudentDashboard';

function Dashboard() {

    const { user, isAuth } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if ( !isAuth ) {
            navigate('/');
            return;
        } 
    }, [])

    switch (user?.roles) {
        case "ROLE_ADMIN":
            return <AdminDashboard />;
        case "ROLE_PROFESSOR":
            return <ProfessorDashboard />;
        case "ROLE_STUDENT":
            return <StudentDashboard />;
        default:
            navigate('/');
    }
}

export default Dashboard;