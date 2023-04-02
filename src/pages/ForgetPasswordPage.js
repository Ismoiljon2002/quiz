import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/Login.css';

export default function ForgetPasswordPage() {

    const [email, setEmail] = useState(null);

    const resetPassword = e => {
        e.preventDefault();
        console.log(email, "email");

        axios.post(`http://localhost:8080/api/forgot_password?email=${email}`)
        .then(data => {
            if ( data.status === 200 ) {
                alert("reset success, now go to your email and smash the given link");
            } else {
                alert("Error! " + data.error)
            }
        })
    }


    return (
        <div className="forgot-password-page text-center m-5-auto">
            <h2>Reset your password</h2>
            <form action="/forgot_password" onSubmit={e => resetPassword(e)}>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br />
                    <input type="email" name="email" required onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Reset</button>
                </p>
                <p><Link to="/">Back to Login</Link>.</p>
            </form>
        </div>
    )
}
