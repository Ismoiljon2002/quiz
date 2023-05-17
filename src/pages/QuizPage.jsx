import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { QuizContext } from '../context/QuizContext';

import { Button, Icon, Popup, Card, Grid, Progress, Input, Checkbox, TextArea, Form } from 'semantic-ui-react';
import QuestionCard from '../components/QuestionCard';

import '../components/style/QuizCard.css';
import QuizRightCards from '../components/QuizRightCards';

function Quiz() {
    const navigate = useNavigate()

    const { questionList } = useContext(QuizContext);
    const { isAuth } = useContext(UserContext);

    const [activeQuestion, setActiveQuestion] = useState(0);

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
            return;
        }
    }, [])

    if (!isAuth) navigate('/');
    else return (
        <div className='quiz-page'>
            <Grid>
                <Grid.Column width={12}>
                    <Card>
                        <Card.Header>
                            <div className="question-number">
                                <Icon name="info circle" />
                                Question No. {activeQuestion + 1} of {questionList.length}
                            </div>
                        </Card.Header>

                        <QuestionCard
                            question={questionList[activeQuestion]}
                            activeQuestion={activeQuestion}
                        />

                        <div className='footer-card'>
                            <Button.Group>
                                <Button animated primary disabled={activeQuestion === 0 && "true"}
                                    onClick={() => setActiveQuestion(activeQuestion - 1)}>
                                    <Button.Content visible>Previous</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                                </Button>

                                <Progress percent={55} indicating />

                                <Button animated primary disabled={activeQuestion === questionList.length - 1 && "true"}
                                    onClick={() => setActiveQuestion(activeQuestion + 1)}>
                                    <Button.Content visible>Next</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </div>
                    </Card>
                </Grid.Column>

                {/* Rigt-side card */}
                <Grid.Column width={4}>
                    <QuizRightCards
                     activeQuestion={activeQuestion}
                     setActiveQuestion={setActiveQuestion} />
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Quiz;