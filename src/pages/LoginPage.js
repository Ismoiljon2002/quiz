import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Dashboard from './Dashboard'

import logo from '../img/logo-light.png';
import './styles/Login.css';

export default function SignInPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth, setIsAuth, setUser } = useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(localStorage.getItem('p') && localStorage.getItem('u') ? true : false);

    useEffect(() => {
        setUsername(localStorage.getItem('u'));
        setPassword(localStorage.getItem('p'));
    }, [])

    const checkLogin = e => {
        e.preventDefault();
       
       
        if (remember) {
            localStorage.setItem('u', username);
            localStorage.setItem('p', password);
        } else {
            localStorage.removeItem('u');
            localStorage.removeItem('p');
        }

        
        axios.post("http://localhost:8080/api/signin/", {
            username,
            password,
        })
            .then(res => {
                console.log(res.data, "came from user login...");
                if (res.status === 200) {
                    setIsAuth(true);

                    alert("login success")
                    
                    window.localStorage.setItem("token", res.data.accessToken);
                    
                    setUser(res.data);
                    
                    navigate('/dashboard');
                } else {
                    alert("Error! " + res.data.error)
                }
            });
        // if ( isAuth && location.state?.from ) {
        //     navigate(location.state.from)
        // }

    }

    if (isAuth)
        return <Dashboard />;
    else return (
        <div className="login-page text-center m-5-auto">

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Login to Your account</h2>

                    <input
                        type="text" 
                        className='input-text' 
                        placeholder='Username'
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        minLength={7}
                        required 
                    />
                    <input className='input-password'
                        type="password"
                        placeholder="Password"
                        value={password}
                        minLength={6}
                        onChange={e => setPassword(e.target.value)} required 
                    />

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
