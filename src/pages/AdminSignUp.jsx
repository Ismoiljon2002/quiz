import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Checkbox, Loader } from 'semantic-ui-react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import logo from '../img/logo-light.png';
import './styles/Login.css';
import { BASE_URL } from '../baseURL';
import { AlertComponent, LoaderComponent } from '../components/CustomComponents';

export default function AdminSignUp() {

    const navigate = useNavigate();
    const location = useLocation();

    const { setIsAuth, setUser } = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const checkLogin = e => {
        e.preventDefault();

        if ( !checkPasswordConfirm() ) {

            setIsLoading(true);

            axios.post(`${BASE_URL}/admin/addAdmin`, {
                username,
                password,
                role: 'ROLE_ADMIN',
                email: "som@gmail.com",
                // name: "some body",
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        navigate('/auth/hidden-admin/login');
                    } else {
                        alert("Error! " + res)
                    }
                    setIsLoading(false);
                })
                .catch(err => {
                    setAlertMessage(err.message);
                    setAlertType('danger')
                    setShowAlert(true);
                    setTimeout(() => {setShowAlert(false);}, 3000);
                });

            setTimeout(() => { setIsLoading(false) }, 3000);

            // if ( isAuth && location.state?.from ) {
            //     navigate(location.state.from)
            // }
        }
    }

    const checkPasswordConfirm = () => {
        if ( password !== passwordConfirm ) {
            setAlertType("danger");
            setAlertMessage("Password Mismatch! Confirm Your password");
            setShowAlert(true);
            setTimeout(() => { setShowAlert(false) }, 5000);
            return true;
        } else {
            setShowAlert(false);
            return false;
        }
    }

    useEffect(() => {
        setUsername(localStorage.getItem('a-u'));
        setPassword(localStorage.getItem('a-p'));
    }, [])


    return (
        <div className="admin-signup-page text-center m-5-auto">

            <AlertComponent message={alertMessage} variant={alertType} show={showAlert} />

            <Form onSubmit={checkLogin}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Signup for free</h2>

                    <input
                        type="text"
                        className='input-text'
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <input className='input-email'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                    <input className='input-password'
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        minLength={8}
                        required
                    />
                    <Button type='submit' size="big" color='green' className='mb-2' fluid >Signup</Button>
                    {
                        isLoading && <LoaderComponent ml="2" variant="light" />
                    }
                </Form.Field>
            </Form>

        </div>
    )
}
