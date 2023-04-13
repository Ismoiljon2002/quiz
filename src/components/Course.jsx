import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

function Course({ course }) {

    const [quizQuestions, setQuizQuestions] = useState([
        {},
    ])

    useEffect(() => {
        axios.get("http://localhost:8080/api/course/questions/getQuestions/1")
            .then(res => {
                console.log(res);
                if (res.status === 200 ) setQuizQuestions(res);
                else console.log(res.status)
            }).catch(err => console.error("response error\n\n", err));
    }, quizQuestions)

    return (
        <Card className="container">
            <h2>Course details</h2>
            <h3> Course Code: {course?.c_code} </h3>
            <h3> Course name: {course?.c_name} </h3>

            <Table>
                <thead>
                    <tr>
                        <th>question ID</th>
                        <th>Question</th>
                        <th>Type</th>
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                    {quizQuestions?.map(q => 
                    <tr>
                        <td>{ q.question_id }</td>
                        <td>{ q.question }</td>
                        <td> {q.qType} </td>
                        <td> {q.point} </td>
                    </tr>
                    )}
                </tbody>
            </Table>

            <Button>Get questions</Button>
        </Card>
    );
}

export default Course;