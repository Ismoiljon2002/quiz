import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import logo from '../img/logo-light.png';
import './styles/Login.css';
import { BASE_URL } from '../baseURL';

export default function AdminLogin() {

    const navigate = useNavigate();
    const location = useLocation();

    const { setIsAuth, setToken, setUser } = useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(localStorage.getItem('a-p') && localStorage.getItem('a-u') ? true : false);

    const checkLogin = e => {
        e.preventDefault();
        console.log(username, password);

        if (remember) {
            localStorage.setItem('a-u', username);
            localStorage.setItem('a-p', password);
        } else {
            localStorage.removeItem('a-u');
            localStorage.removeItem('a-p');
        }

        axios.post(`${BASE_URL}/admin/login`, {
            username,
            password,
        })
            .then(res => {
                console.log(res, "came from admin login PAGE...");
                if (res.status === 200) {
                    setIsAuth(true);
                    setToken(res.data.accessToken);
                    setUser(res.data);

                    navigate('/dashboard');
                } else {
                    alert("Error! " + res)
                }
            })
            .catch(err => console.log('Error', err));

        // if ( isAuth && location.state?.from ) {
        //     navigate(location.state.from)
        // }
    }

    useEffect(() => {
        setUsername(localStorage.getItem('a-u'));
        setPassword(localStorage.getItem('a-p'));
    }, [])


    return (
        <div className="login-page text-center m-5-auto">

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Admin, Welcome!</h2>

                    <input
                        type="text"
                        className='input-text'
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <input className='input-password'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <React.Fragment>
                        <Checkbox label="Remember Me" checked={remember} onClick={() => setRemember(!remember)} />

                        <Link to="/auth/forgot-password">Forgot password?</Link>
                    </React.Fragment>

                    <Button type='submit' size="big" color='green' fluid>Login</Button>
                </Form.Field>
            </Form>

        </div>
    )
}
