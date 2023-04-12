import React from 'react';
import { QuizProvider } from './QuizContext';
import { AnswerProvider } from './AnswerContext';
import { UserProvider } from './UserContext';

function AllContexts ({children}) {
    return ( 
        <QuizProvider>
            <AnswerProvider>
                <UserProvider>      
                    {children}
                </UserProvider>
            </AnswerProvider>
        </QuizProvider>
    );
}

export default AllContexts ;