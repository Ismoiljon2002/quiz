import React, { useState, useEffect, useRef } from 'react';
import { Button, Icon, Popup, Card, Container } from 'semantic-ui-react';
import './style/QuizCard.css';

function Quiz() {
    const toggleActive = e => {
        document.querySelectorAll('.answers li').forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
    }
    const question = {
        question_id: 1,
        week_order: 1,
        question: "Some question goes here ??",
        point: 1,
        status: false,
        owner: "ROLE_PROFESSOR",
        answers: [
            "Answer number 1",
            "Answer number 2",
            "Answer number 3",
            "Answer number 4",
        ],
        usedStatus: null,
        qtype: 'WRITTEN',
    }

    return (
        <Container className='quiz-page'>
            <Card>
                <Card.Header>
                    <div className="question-number">
                        <Icon name="info circle" />
                        Question No. {1} of {5}
                    </div>
                    <Button.Group>
                        <Popup content='Hours' trigger={<Button content={0} />} />
                        <Popup content='Minutes' trigger={<Button content={30} />} />
                        <Popup content='Seconds' trigger={<Button content={56} />} />
                    </Button.Group>
                </Card.Header>
                <Card.Content>
                    <div className="question">Q. {question.question}</div>
                    <p className='message'>Please choose one of the following 👇</p>
                    <div className="answers">
                        <ul>
                            {question.answers.map(item => <li key={item}
                                onClick={e => toggleActive(e)}
                            >{item}</li>)}
                        </ul>
                    </div>
                </Card.Content>
                <div className='card-footer'>
                    {/* <Button.Group> */}
                    <Button animated primary>
                        <Button.Content visible>Previous</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>

                    <Button animated primary>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    {/* </Button.Group> */}
                </div>
            </Card>
        </Container>
    );
}

export default Quiz;