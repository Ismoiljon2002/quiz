import React, { useState, useEffect } from 'react';
import { Col, Row, Accordion, Nav } from 'react-bootstrap';
import Course from '../../components/Course';

function ProfessorDashboard() {

    const [ currentCourse, setCurrentCourse ] = useState(null)

    const courses = [
        {
            c_id: 1,
            c_code: "M112", 
            c_name: "Math"
        },{
            c_id: 2,
            c_code: "Ip132", 
            c_name: "Intro to Prog"
        },{
            c_id: 3,
            c_code: "AE108", 
            c_name: "Academic English"
        }
    ]

    return (
        <div className="prof dashboard container">
            <Row>
                <Col md="4" >
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Semester #1</Accordion.Header>
                            <Accordion.Body>
                                {courses.map(c => <Nav.Link key={c.c_id}
                                    onClick={() => setCurrentCourse(c)}
                                >{c.c_name} ({c.c_code}) </Nav.Link>)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Semester #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md="8" >
                    <Course course={currentCourse} />
                </Col>
            </Row>
        </div>
    );
}

export default ProfessorDashboard;