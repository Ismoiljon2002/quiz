import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles/Login.css';

export default function SignInPage({setIsAuth}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const checkLogin = e => {
        e.preventDefault();
        console.log(username, password)
    
        axios.post("http://localhost:8080/api/signin/", {
            username, 
            password,
        })
        .then(data => {
            console.log(data.data, "came from user login...");
            if ( data.data.status === 'OK') {
                setIsAuth(true);
                setTimeout(() => {
                    alert("login success")
                    window.localStorage.setItem("token", data.data.data)
                    window.location.href = './userData';
                }, 100);

            } else {
                alert("Error! " + data.data.error)
            }
        })

    }

    return (
        <div className="login-page text-center m-5-auto">
            <h2>Login to your account</h2>
            <form action="/" onSubmit={checkLogin}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="text" required onChange={e => setUsername(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/auth/forgot-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={e => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                {/* <p>First time? <Link to="/auth/register">Create an account</Link>.</p> */}
            </form>
        </div>
    )
}
