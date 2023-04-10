import React, { createContext, useState } from 'react';
export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {

    const [ answerList, setAnswerList ] = useState([]);

    return <AnswerContext.Provider value={{ answerList, setAnswerList }}>
        {children}
    </AnswerContext.Provider>
}