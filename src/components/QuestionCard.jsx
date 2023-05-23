import React, { useContext, useEffect, useState } from 'react';
import { Card, Input } from 'semantic-ui-react';
import { AnswerContext } from '../context/AnswerContext';

function QuestionCard({ question, activeQuestion: index }) {
    const { answerList, setAnswerList } = useContext(AnswerContext);
    const { answers, question: quest, qtype, question_id, point } = question;
    let answerTemplate = {
        questionPaperId: 0,
        questionId: 0,
        answerId: 0,
        answer: "",
        comment: "",
        spentTime: 0
    }

    let spentTime = 0;

    const toggleActive = e => {
        document.querySelectorAll('.answers li').forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
    }

    const chooseVariant = (e, a) => {
        toggleActive(e);

        answerTemplate = { ...answerTemplate, answerId: a.id, answer: a.answer, spentTime }
        console.log(answerList)
        setAnswerList(...answerList, answerTemplate);
    }



    useEffect(() => {
        setInterval(() => { spentTime += 1 }, 1000)
    }, []);


    return (
        <Card.Content>
            <div className="question"> <h3>{point} point{point > 1 && "s"}.</h3> {quest} </div>
            <p className='message'>{qtype === "WRITTEN" ? "Write your answer clearly" : "Please choose one of the following"} </p>

            <div className="answers">
                {
                    qtype === "WRITTEN" ?
                        <Input fluid size='big' placeholder='Write here...' />
                        : <ul>
                            {
                                answers.map(a => <li
                                    key={a.id}
                                    onClick={e => chooseVariant(e, a)}
                                >{a.answer}</li>)
                            }
                        </ul>
                }
            </div>
        </Card.Content>
    );
}

export default QuestionCard;