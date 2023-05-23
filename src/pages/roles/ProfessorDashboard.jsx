import React, { useState, useEffect } from 'react';
import SemesterSelect from '../../components/SemesterSelect';
import Courses from '../Courses';

function ProfessorDashboard() {

    const [currentCourse, setCurrentCourse] = useState({})

    const courses = [
        {
            c_id: 1,
            c_code: "M112",
            c_name: "Math"
        }, {
            c_id: 2,
            c_code: "Ip132",
            c_name: "Intro to Prog"
        }, {
            c_id: 3,
            c_code: "AE108",
            c_name: "Academic English"
        }
    ]

    return (
        <div className="prof dashboard lms container">
            <h2>Learning Management Sysytem</h2>

            <SemesterSelect />

            <Courses courses={courses}/>
        </div>
    );
}

export default ProfessorDashboard;