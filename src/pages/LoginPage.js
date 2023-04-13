import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

import logo from '../img/logo-light.png';
import './styles/Login.css';

export default function SignInPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth, setIsAuth } = useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const checkLogin = e => {
        e.preventDefault();
        console.log(username, password);

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
            });

        if ( isAuth && location.state?.from ) {
            navigate(location.state.from)
        }

    }

    return (
        <div className="login-page text-center m-5-auto">

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Login to Your account</h2>

                    <input
                        type="text" className='input-text' placeholder='Username' onChange={e => setUsername(e.target.value)} required />
                    <input className='input-password'
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} required />

                    <React.Fragment>
                        <Checkbox label="Remember Me" checked={remember} onClick={() => setRemember(!remember) } />

                        <Link to="/auth/forgot-password">Forgot password?</Link>
                    </React.Fragment>

                    <Button type='submit' size="big" color='green' fluid>Login</Button>
                </Form.Field>
            </Form>

        </div>
    )
}
