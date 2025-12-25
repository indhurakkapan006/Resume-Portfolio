import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    // 1. Check if user is logged in
    useEffect(() => {
        if(!userId) {
            navigate('/login');
        } else {
            fetchTasks();
        }
    }, [userId, navigate]);

    // 2. Fetch Tasks from Backend
    const fetchTasks = () => {
        axios.get('https://taskflow-api-z1us.onrender.com/tasks/' + userId)
            .then(res => {
                if(Array.isArray(res.data)) setTasks(res.data);
            })
            .catch(err => console.log(err));
    };

    // 3. Add a New Task
    const handleAdd = (e) => {
        e.preventDefault();
        if(!newTask) return;
        
        axios.post('https://taskflow-api-z1us.onrender.com/tasks', {
            user_id: userId,
            title: newTask,
            description: '' // Optional description
        })
        .then(res => {
            if(res.data.Status === "Success") {
                setNewTask(''); // Clear input
                fetchTasks();   // Refresh list
            }
        });
    };

    // 4. Delete Task
    const handleDelete = (id) => {
        axios.delete('https://taskflow-api-z1us.onrender.com/tasks/' + id)
            .then(res => {
                if(res.data.Status === "Success") fetchTasks();
            });
    };

    // 5. Toggle Complete (Visual update)
    const handleToggle = (id, currentStatus) => {
        const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
        axios.put('https://taskflow-api-z1us.onrender.com/tasks/status/' + id, { status: newStatus })
            .then(res => {
                if(res.data.Status === "Success") fetchTasks();
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/login');
    }

    return (
        <div className="container">
            {/* --- HEADER SECTION --- */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #ddd', paddingBottom:'15px', marginBottom:'20px'}}>
                <h2>My Tasks</h2>
                <div>
                    {/* LINK TO PROFILE PAGE */}
                    <Link to="/profile" style={{marginRight:'20px', textDecoration:'none', fontWeight:'bold', color:'#007bff'}}>My Profile</Link>
                    <button onClick={handleLogout} className="btn-danger">Logout</button>
                </div>
            </div>

            {/* --- ADD TASK FORM --- */}
            <form onSubmit={handleAdd} style={{display:'flex', gap:'10px', marginBottom:'30px'}}>
                <input 
                    type="text" 
                    name="newTask"          // <--- ADDED
                    id="newTask"            // <--- ADDED
                    placeholder="What needs to be done?" 
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    style={{flex:1, padding:'10px', fontSize:'1rem'}} 
                />
                <button type="submit" className="btn-primary" style={{padding:'10px 20px'}}>Add Task</button>
            </form>

            {/* --- TASK LIST --- */}
            <ul style={{listStyle:'none', padding:0}}>
                {tasks.length > 0 ? tasks.map(task => (
                    <li key={task.id} style={{
                        background: task.status === 'completed' ? '#d4edda' : '#f8f9fa',
                        padding: '15px', 
                        marginBottom: '10px', 
                        borderRadius: '5px',
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                        color: task.status === 'completed' ? '#155724' : '#333',
                        border: '1px solid #eee'
                    }}>
                        <span 
                            onClick={() => handleToggle(task.id, task.status)}
                            style={{cursor:'pointer', flex:1, fontSize:'1.1rem'}}
                            title="Click to toggle status"
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleDelete(task.id)} className="btn-danger" style={{padding:'5px 12px', fontSize:'0.9rem', marginLeft:'10px'}}>Delete</button>
                    </li>
                )) : <p style={{color:'#888', textAlign:'center'}}>No tasks yet. Add one above!</p>}
            </ul>
        </div>
    );
}