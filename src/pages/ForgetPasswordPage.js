import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Login.css';

export default function ForgetPasswordPage() {
    return (
        <div className="forgot-password-page text-center m-5-auto">
            <h2>Reset your password</h2>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br />
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            {/* <p>First time? <Link to="/auth/register">Create an account</Link>.</p> */}
            <p><Link to="/">Back to Homepage</Link>.</p>
        </div>
    )
}
