// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed imports we don't need
import { Login, Register } from './Auth';
import Dashboard from './Dashboard';
import Profile from './Profile'; // <--- IMPORT THIS

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} /> {/* <--- ADD THIS ROUTE */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;