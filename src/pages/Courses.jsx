import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';

function Courses ({ courses }) {
    return ( 
        <>
            Courses go here...

            {courses.map(c => <CourseCard key={c} course={c} className="col-md-3" />)}
        </>
     );
}

export default Courses ;