import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button } from 'semantic-ui-react';
import logo from '../img/logo-light.png';
import { BASE_URL } from '../baseURL';
import './styles/Login.css';


export default function ForgetPasswordPage() {

    const [email, setEmail] = useState(null);

    const resetPassword = async e => {
        e.preventDefault();

        await axios.post(`${BASE_URL}/forgot_password?email=${email}`)
            .then(data => {
                if (data.status === 200) {
                    alert("reset success, now go to your email and smash the given link");
                } else {
                    alert("Error! " + data.error)
                }
            })
    }


    return (
        <div className="login-page text-center m-5-auto">

            <Form onSubmit={e => resetPassword(e)}>
                <Form.Field required>

                    <img src={logo} />
                    <h2>Reset Your password</h2>

                    <input
                        type="email" className='input-email' placeholder='Email' onChange={e => setEmail(e.target.value)} required />

                    <Button type='submit' size="big" color='green' className='reset-password-btn' fluid>Reset Password</Button>

                    <Link to="/">Back to Login</Link>
                </Form.Field>
            </Form>

        </div>
    )
}
