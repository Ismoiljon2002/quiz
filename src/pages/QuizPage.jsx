import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { QuizContext } from '../context/QuizContext';
import { AnswerContext } from '../context/AnswerContext';

import QuestionCard from '../components/QuestionCard';
import QuizRightCards from '../components/QuizRightCards';

import { Button, Icon, Card, Grid, Progress } from 'semantic-ui-react';
import '../components/style/QuizCard.css';
import axios from 'axios';
import { BASE_URL } from '../baseURL';

function Quiz() {
    const navigate = useNavigate()

    const { questionList, setQuestionList } = useContext(QuizContext);
    const { isAuth } = useContext(UserContext);
    const { answerList } = useContext(AnswerContext);

    const [ activeQuestion, setActiveQuestion ] = useState(0);

    const submit = () => {console.log(answerList)}

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
            return;
        }

        axios.get(`${BASE_URL}/questions/getQuestions/1`, {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb21lNiIsImlhdCI6MTY4NTk3MzUzOSwiZXhwIjoxNjg1OTgzNTM5fQ.Bj_PUgAHaJjz-s0e0kievobk21cYs8QuWXXqedobQEDSsKu2dRbO9bty382PiQm53KtttXP-6OblqVP_D9oaiA' }
        })
        .then(res => {
            console.log(res, 'resp ques')
            setQuestionList(res.data)
        })
        .catch(err => console.warn(err, 'err'))
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

                                <Progress percent={questionList.length / 100 * 50 } indicating />

                                <Button animated primary disabled={activeQuestion === questionList.length - 1 && "true"}
                                    onClick={() => setActiveQuestion(activeQuestion + 1)}>
                                    <Button.Content visible>Next</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                            <Button className='quiz-submit-btn' onClick={submit}>Submit</Button>
                        </div>
                    </Card>
                </Grid.Column>

                {/* Rigt-side card */}
                <Grid.Column width={4}>
                    <QuizRightCards
                     activeQuestion={ activeQuestion }
                     setActiveQuestion={ setActiveQuestion }
                    //  givenTime={ givenTime } 
                />
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Quiz;