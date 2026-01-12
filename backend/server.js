require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});
// Replace these with your actual Aiven details!


db.connect(err => {
    if(err) console.log("Error connecting to DB:", err);
    else console.log("Connected to Aiven Database!");
});

// --- ROUTES ---

// 1. REGISTER
app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body.password];
    db.query(sql, [values], (err, result) => {
        if(err) return res.json({Error: "Error registering user", Details: err});
        return res.json({Status: "Success"});
    });
});

// 2. LOGIN
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Error: "Login error"});
        if(data.length > 0) {
            return res.json({Status: "Success", id: data[0].id}); // Send User ID back
        } else {
            return res.json({Error: "No record existed"});
        }
    });
});

// 3. GET USER PROFILE
app.get('/profile/:id', (req, res) => {
    const sql = "SELECT id, username, email, bio, profile_pic FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if(err) return res.json({Error: "Error fetching profile"});
        return res.json(result[0]);
    });
});

// 4. UPDATE PROFILE (Bio & Pic)
app.put('/update-profile', (req, res) => {
    const sql = "UPDATE users SET bio = ?, profile_pic = ? WHERE id = ?";
    db.query(sql, [req.body.bio, req.body.profile_pic, req.body.id], (err, result) => {
        if(err) {
            console.error("----------- DATABASE ERROR -----------");
            console.error(err); // This prints the detailed error to your terminal
            console.error("--------------------------------------");
            return res.json({Error: "Error updating profile", Details: err.message});
        }
        return res.json({Status: "Success"});
    });
});

// 5. ADD TASK
app.post('/tasks', (req, res) => {
    const sql = "INSERT INTO tasks (`user_id`, `title`, `description`) VALUES (?)";
    const values = [req.body.user_id, req.body.title, req.body.description];
    db.query(sql, [values], (err, result) => {
        if(err) return res.json({Error: "Error adding task"});
        return res.json({Status: "Success"});
    });
});

// 6. GET USER TASKS
app.get('/tasks/:id', (req, res) => {
    const sql = "SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC";
    db.query(sql, [req.params.id], (err, result) => {
        if(err) return res.json({Error: "Error fetching tasks"});
        return res.json(result);
    });
});

// 7. MARK TASK COMPLETED (Update Status)
app.put('/tasks/status/:id', (req, res) => {
    const sql = "UPDATE tasks SET status = ? WHERE id = ?";
    db.query(sql, [req.body.status, req.params.id], (err, result) => {
        if(err) return res.json({Error: "Error updating task"});
        return res.json({Status: "Success"});
    });
});

// 8. DELETE TASK
app.delete('/tasks/:id', (req, res) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if(err) return res.json({Error: "Error deleting task"});
        return res.json({Status: "Success"});
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081...");
});