import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

// import logo from '../img/nuu_logo.png';
import logo from '../img/logo-light.png';
import './styles/Login.css';

export default function SignInPage({ setIsAuth }) {

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
                if (data.data.status === 'OK') {
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

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Login to Your account</h2>

                    <input
                        type="text" className='input-text' placeholder='Username' onChange={e => setUsername(e.target.value)} required/>
                    <input className='input-password'
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} required/>

                    <React.Fragment>
                        <Checkbox label="Remember Me" />

                        <Link to="/auth/forgot-password">Forgot password?</Link>
                    </React.Fragment>

                    <Button type='submit' size="big" color='green' fluid>Login</Button>
                </Form.Field>
            </Form>

        </div>
    )
}
