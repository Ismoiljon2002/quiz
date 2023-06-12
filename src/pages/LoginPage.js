import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { UserContext } from '../context/UserContext';
import { LoaderComponent, AlertComponent } from '../components/CustomComponents';
import { BASE_URL } from '../baseURL';
import logo from '../img/logo-light.png';
import Dashboard from './Dashboard'
import axios from 'axios';

import './styles/Login.css';

export default function SignInPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth, setIsAuth, setUser } = useContext(UserContext)

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const [isLoading, setIsLoading] = useState(false);

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

        setIsLoading(true);

        setIsAuth(true);
        navigate('/dashboard');
        setUser({ roles: "ROLE_ADMIN" })
        
        // axios.post(`${BASE_URL}/user/login`, {
        //     username,
        //     password,
        // })
        //     .then(res => {
        //         if (res.status === 200) {
        //             setIsAuth(true);
                    
        //             window.localStorage.setItem("token", res.data.accessToken);
                    
        //             setUser(res.data);
                    
        //             navigate('/dashboard');
        //         } else {
        //             alert("Error! " + res.data.error)
        //         }
        //         setIsLoading(false);
        //     })
        //     .catch(err => {
        //         setAlertMessage(err.message);
        //         setAlertType('danger')
        //         setShowAlert(true);
        //         setTimeout(() => { setShowAlert(false); }, 3000);
        //     });

        setTimeout(() => { setIsLoading(false) }, 3000);

        if ( isAuth && location.state?.from ) {
            navigate(location.state.from)
        }
    }

    if (isAuth)
        return <Dashboard />;
    else return (
        <div className="login-page text-center m-5-auto">
            
            <AlertComponent message={alertMessage} variant={alertType} show={showAlert} />

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

                    <Button type='submit' size="big" color='green' className='mb-2' fluid>Login</Button>
                    {
                        isLoading && <LoaderComponent ml="2" variant="light" />
                    }
                </Form.Field>
            </Form>

        </div>
    )
}
