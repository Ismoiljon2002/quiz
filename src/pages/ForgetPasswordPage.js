import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/Login.css';
import { Form, Input, Button } from 'semantic-ui-react';
// import logo from '../img/nuu_logo.png';
import logo from '../img/logo-light.png';

export default function ForgetPasswordPage() {

    const [email, setEmail] = useState(null);

    const resetPassword = e => {
        e.preventDefault();
        console.log(email, "email");

        axios.post(`http://localhost:8080/api/forgot_password?email=${email}`)
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
