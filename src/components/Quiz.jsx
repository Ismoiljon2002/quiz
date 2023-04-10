import React, { useState, useContext } from 'react';
import { Button, Icon, Popup, Card, Container, Grid } from 'semantic-ui-react';
import QuestionCard from './QuestionCard';
import { QuizContext } from '../context/QuizContext';
import './style/QuizCard.css';

function Quiz() {

    const { questionList } = useContext(QuizContext);
    const [activeQuestion, setActiveQuestion] = useState(0);

    if (!questionList) return (
        <h1 className='container'>You are not authorized</h1>
    );
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
                                {
                                    questionList.map((q, i) =>
                                        <Button primary
                                            className={i == activeQuestion ? "active" : ""}
                                            onClick={() => setActiveQuestion(i)}
                                        > {i + 1} </Button>
                                    )
                                }
                                <Button primary> 9 </Button>
                                <Button primary> 10 </Button>
                                <Button primary> 11 </Button>
                                <Button primary> 12 </Button>
                                <Button primary> 13 </Button>
                                <Button primary> 14 </Button>
                                <Button primary> 15 </Button>
                                <Button primary> 16 </Button>
                                <Button primary> 17 </Button>
                                <Button primary> 18 </Button>
                                <Button primary> 19 </Button>
                                <Button primary> 20 </Button>
                                <Button primary> 21 </Button>
                                <Button primary> 22 </Button>
                                <Button primary> 23 </Button>

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
                    <Card className='right-side-card'>
                        <Card.Header>
                            <Button.Group>
                                <Popup content='Hours' trigger={<Button content={0} />} />
                                <Popup content='Minutes' trigger={<Button content={30} />} />
                                <Popup content='Seconds' trigger={<Button content={56} />} />
                            </Button.Group>
                        </Card.Header>
                        <div className="card-body">
                            <Button.Group>

                                {
                                    questionList.map((q, i) =>
                                        <Button primary
                                            className={i == activeQuestion ? "active" : ""}
                                            onClick={() => setActiveQuestion(i)}
                                        > {i + 1} </Button>
                                    )
                                }
                                <Button primary> 9 </Button>
                                <Button primary> 10 </Button>
                                <Button primary> 11 </Button>
                                <Button primary> 12 </Button>
                                <Button primary> 13 </Button>
                                <Button primary> 14 </Button>
                                <Button primary> 15 </Button>
                                <Button primary> 16 </Button>
                                <Button primary> 17 </Button>
                                <Button primary> 18 </Button>
                                <Button primary> 19 </Button>
                                <Button primary> 20 </Button>
                                <Button primary> 21 </Button>
                                <Button primary> 22 </Button>
                                <Button primary> 23 </Button>

                            </Button.Group>
                        </div>

                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Quiz;