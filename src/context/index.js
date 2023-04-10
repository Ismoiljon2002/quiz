import React from 'react';
import { QuizProvider } from './QuizContext';
import { AnswerProvider } from './AnswerContext';

function AllContexts ({children}) {
    return ( 
        <QuizProvider>
            <AnswerProvider>
                {children}
            </AnswerProvider>
        </QuizProvider>
    );
}

export default AllContexts ;