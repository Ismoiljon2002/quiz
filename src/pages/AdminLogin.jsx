import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

import logo from '../img/logo-light.png';
import './styles/Login.css';

export default function AdminLogin () {

    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth, setIsAuth, token, setToken, user, setUser } = useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const checkLogin = e => {
        e.preventDefault();
        console.log(username, password);

        axios.post("http://localhost:8080/api/v1/admin/login", {
            username,
            password,
        })
            .then(data => {
                console.log(data, "came from admin login...");
                if (data.data.status === 200) {
                    setIsAuth(true);
                    setToken(data.data.accessToken);
                    setUser(data.data);
                    alert("login success")
                    navigate('./userData');
                } else {
                    alert("Error! " + data.data.error)
                }
            }).catch( err => console.log('Error', err));

        // if ( isAuth && location.state?.from ) {
        //     navigate(location.state.from)
        // }
    }

    return (
        <div className="login-page text-center m-5-auto">

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Admin, Welcome!</h2>

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
