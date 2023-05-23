import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';


function CourseCard({ course }) {

    return (
        <Card className='center'>
            <Card.Header>
                <h3>{course.c_id}</h3>
                <h3>Code: {course.c_name}</h3>
            </Card.Header>
            <Card.Body>
                <p>Code: {course.c_code}</p>
            </Card.Body>
        </Card>
    );
}

export default CourseCard;