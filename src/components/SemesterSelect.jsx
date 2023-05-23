import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function SemesterSelect () {
    return ( 
        <Form.Select aria-label="Default select example" className='semester-select'>
            <option value="sem1">BSc Semester One</option>
            <option value="sem2">BSc Semester Two</option>
            <option value="sem3">BSc Semester Three</option>
        </Form.Select> );
}

export default SemesterSelect;