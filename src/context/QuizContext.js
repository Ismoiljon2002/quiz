import React, { createContext, useState } from 'react';
import { DB } from '../db';
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const [ questionList, setQuestionList ] = useState(DB);


    return <QuizContext.Provider value={{ questionList, setQuestionList }}>
        {children}
    </QuizContext.Provider>
}