import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { UserContext } from '../context/UserContext';
import { LoaderComponent, AlertComponent } from '../components/CustomComponents';
import { BASE_URL } from '../baseURL';
import logo from '../img/logo-light.png';
import axios from 'axios';

import './styles/Login.css';
export default function AdminLogin() {

    const navigate = useNavigate();
    const location = useLocation();

    const { setIsAuth, setToken, setUser } = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(localStorage.getItem('a-p') && localStorage.getItem('a-u') ? true : false);

    const checkLogin = e => {
        e.preventDefault();

        if (remember) {
            localStorage.setItem('a-u', username);
            localStorage.setItem('a-p', password);
        } else {
            localStorage.removeItem('a-u');
            localStorage.removeItem('a-p');
        }

        setIsLoading(true);

        axios.post(`${BASE_URL}/admin/login`, {
            username,
            password,
        })
            .then(res => {
                if (res.status === 200) {
                    setIsAuth(true);
                    setUser(res.data);
                    localStorage.setItem('token', res.data.accessToken);
                    
                    navigate('/dashboard');
                } else {
                    alert("Error! " + res)
                }
                setIsLoading(false);
            })
            .catch(err => {
                setAlertMessage(err.message);
                setAlertType('danger')
                setShowAlert(true);
                setTimeout(() => { setShowAlert(false); }, 3000);
            });

        setTimeout(() => { setIsLoading(false) }, 3000);

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

            <AlertComponent message={alertMessage} variant={alertType} show={showAlert} />
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
                        minLength={8}
                        required
                    />

                    <React.Fragment>
                        <Checkbox label="Remember Me" checked={remember} onClick={() => setRemember(!remember)} />

                        <Link to="/auth/forgot-password">Forgot password?</Link>
                    </React.Fragment>

                    <Button type='submit' size="big" color='green' className='mb-2' fluid>Login</Button>
                    {
                        isLoading && <LoaderComponent ml="2" variant="light" />
                    }
                </Form.Field>
            </Form>

        </div>
    )
}
