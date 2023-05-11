import React, { useContext, useState } from 'react'
import { Button, Icon, Popup, Card, Grid, Progress, Input, Checkbox, TextArea, Form } from 'semantic-ui-react';

import { QuizContext } from '../context/QuizContext';

function QuizRightCards({activeQuestion, setActiveQuestion}) {
    
    const { questionList } = useContext(QuizContext);

    const [ isWrongQuestion, setIswrongQuestion ] = useState(false);

    return (
        <>
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
                                    className={i === activeQuestion ? "active" : ""}
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
            <Card className='comment-to-question-card'>
                <Card.Content>
                    <Form>
                        <Checkbox label={{ children: 'Do You think this question is wrong?' }}
                        onClick={() => {setIswrongQuestion(!isWrongQuestion)}} 
                        checked={isWrongQuestion} />

                        <TextArea
                            placeholder="Write Your comment"
                            maxlength="250"
                            disabled={!isWrongQuestion}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </>
    );
}

export default QuizRightCards;