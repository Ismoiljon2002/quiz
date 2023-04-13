import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

function Course({ course }) {

    
    const [quizQuestions, setQuizQuestions] = useState(null)
    let selectedQuestions = [];

    const addToExamPaper = (e, id) => {
        console.log(e.target)
        if (e.target) selectedQuestions.push(id);
        else selectedQuestions = selectedQuestions.filter(el => el !== id);
    }

    const sendExamPaper = () => {
        axios.post('http://localhost:8080/api/questionPaperList/add/some4/1', {
            examPapers: {
                examType: "MIDTERM",
                status: false,
                variant: "A",
            },
            questionID: selectedQuestions
        }).then(res => console.log("res ", res))
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/course/questions/getQuestions/1")
            .then(res => {
                console.log(res.data);
                if (res.status === 200 ) setQuizQuestions(res.data);
                else console.log(res.status)
            }).catch(err => console.log("response error\n", err));
    }, quizQuestions)

    return (
        <Card className="container">
            <h2>Course details</h2>
            <h3> Course Code: {course?.c_code} </h3>
            <h3> Course name: {course?.c_name} </h3>

            <Table stripped="true">
                <thead>
                    <tr>
                        <th>question ID</th>
                        <th>Question</th>
                        <th>Type</th>
                        <th>Point</th>
                        <th><input type="checkbox" name="" id="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {quizQuestions?.map(q => 
                    <tr key={q.question_id}>
                        <td>{ q.question_id }</td>
                        <td>{ q.question }</td>
                        <td> {q.qType} </td>
                        <td> {q.point} </td>
                        <td><input type="checkbox" name="" id=""
                            onClick={(e) => addToExamPaper(e, q.question_id)} /></td>
                    </tr>
                    )}
                </tbody>
            </Table>

            <Button onClick={sendExamPaper}>Send Exam paper</Button>
        </Card>
    );
}

export default Course;