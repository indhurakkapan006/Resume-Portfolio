import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// --- REGISTER COMPONENT ---
export function Register() {
    const [values, setValues] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Post to your LOCAL backend
        axios.post('https://taskflow-api-z1us.onrender.com/register', values)
            .then(res => {
                if(res.data.Status === "Success") {
                    alert("Account Created! Please Login.");
                    navigate('/login');
                } else {
                    alert("Error registering. Try a different email.");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={e => setValues({...values, username: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={e => setValues({...values, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setValues({...values, password: e.target.value})} required />
                </div>
                <button type="submit" className="btn-primary">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

// --- LOGIN COMPONENT ---
export function Login() {
    const [values, setValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://taskflow-api-z1us.onrender.com/login', values)
            .then(res => {
                if(res.data.Status === "Success") {
                    // Save User ID to browser storage so we know who is logged in
                    localStorage.setItem('userId', res.data.id);
                    navigate('/'); // Go to Dashboard
                } else {
                    alert("Login Failed. Check email/password.");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={e => setValues({...values, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setValues({...values, password: e.target.value})} required />
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
            <p>New user? <Link to="/register">Create account</Link></p>
        </div>
    );
}