import React, { useContext, useState } from 'react';
import { Card, Input } from 'semantic-ui-react';
import { AnswerContext } from '../context/AnswerContext';

function QuestionCard({ question, activeQuestion: index }) {
    const { answerList, setAnswerList } = useContext(AnswerContext);
    const { answers, question: quest, qtype, question_id } = question;
    const [ answerTemplate, setAnswerTemplate ] = useState(
        {
            questionPaperId: 0, 
            questionId: 0, 
            answer: "", 
            comment: "", 
            spentTime: 0 
        }
    ); 

    const toggleActive = e => {
        document.querySelectorAll('.answers li').forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
    }

    const chooseVariant = e => {
        toggleActive(e);

        setAnswerTemplate({...answerTemplate, questionId: question_id, answer: e.target.innerText})
        setAnswerList([...answerList, answerTemplate]);

        console.log("answer chosen", answerList)
    }

    return (
            <Card.Content>
                <div className="question">Q. {quest}</div>
                <p className='message'>{qtype === "WRITTEN" ? "Write your answer clearly" : "Please choose one of the following"} </p>
                
                <div className="answers">
                    {
                        qtype === "WRITTEN" ? 
                            <Input fluid size='big' placeholder='Write here...' />
                        : <ul>
                            {
                                answers.map(answer => <li 
                                    key={answer}
                                    onClick={e => chooseVariant(e)}
                                >{answer}</li>)
                            }
                        </ul>
                    }
                </div>
            </Card.Content>
    );
}

export default QuestionCard;