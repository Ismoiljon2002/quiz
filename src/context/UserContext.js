import React, { createContext, useState } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState({
        username: "2110176",
        first_name: "Ismoiljon",
        last_name: "Mirabdullayev",
        middle_name: "Ibrohimjon o'g'li",
        dob: "29-06-2002",
        email: "2110176@newuu.uz",
        password: "something",
        role: "professor",
        coursesList:[ 1, 2, 3, 4,
            {course_id:1},
            {course_id:2},
            {course_id:3},
            {course_id:4},
            {course_id:5},
        ],
        active:true,
    });
    const [ isAuth, setIsAuth ] = useState(true)

    return <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
        {children}
    </UserContext.Provider>
}