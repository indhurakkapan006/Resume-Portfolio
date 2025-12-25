import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Profile() {
    const [user, setUser] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if(!userId) navigate('/login');
        fetchProfile();
    }, [userId, navigate]);

    const fetchProfile = () => {
        axios.get('https://taskflow-api-z1us.onrender.com/profile/' + userId)
            .then(res => {
                setUser(res.data);
                setBio(res.data.bio || '');
                setImage(res.data.profile_pic || '');
            })
            .catch(err => console.log(err));
    }

    const handleSave = () => {
        axios.put('https://taskflow-api-z1us.onrender.com/update-profile', {
            id: userId,
            bio: bio,
            profile_pic: image
        })
        .then(res => {
            if(res.data.Status === "Success") {
                alert("Profile Updated!");
                setIsEditing(false);
                fetchProfile(); 
            } else {
                alert("Update failed");
            }
        });
    }

    // Helper: Fallback to initials if no image is set
    const profileImageSrc = user.profile_pic || 
        `https://ui-avatars.com/api/?name=${user.username || 'User'}&background=random`;

    return (
        <div className="container" style={{maxWidth:'500px', margin:'50px auto', textAlign:'center'}}>
            <div className="card">
                {/* Profile Image Display */}
                <img 
                    src={profileImageSrc} 
                    alt="Profile" 
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${user.username || 'User'}` }}
                    style={{width:'100px', height:'100px', borderRadius:'50%', objectFit:'cover', marginBottom:'15px'}}
                />
                
                <h2>{user.username}</h2>
                <p style={{color:'gray'}}>{user.email}</p>

                {/* Bio Section */}
                {!isEditing ? (
                    <div style={{margin:'20px 0'}}>
                        <p><strong>Bio:</strong> {user.bio || "No bio set yet."}</p>
                        <button onClick={() => setIsEditing(true)} className="btn-primary">Edit Profile</button>
                    </div>
                ) : (
                    <div style={{margin:'20px 0', display:'flex', flexDirection:'column', gap:'10px'}}>
                        <label htmlFor="bio" style={{textAlign:'left', fontWeight:'bold'}}>Bio</label>
                        <textarea 
                            name="bio"              
                            id="bio"                
                            autoComplete="off"      // FIX: "off" stops browser warnings
                            placeholder="Write something about yourself..." 
                            value={bio} 
                            onChange={e => setBio(e.target.value)}
                            rows="3"
                        />
                        
                        <label htmlFor="profile_pic" style={{textAlign:'left', fontWeight:'bold'}}>Profile Image URL</label>
                        <input 
                            type="text" 
                            name="profile_pic"      
                            id="profile_pic"        
                            autoComplete="off"    // FIX: Changed from "photo" to "off"
                            placeholder="Image URL (e.g. https://imgur.com/...)" 
                            value={image} 
                            onChange={e => setImage(e.target.value)} 
                        />
                        
                        <div style={{display:'flex', gap:'10px', justifyContent:'center', marginTop:'10px'}}>
                            <button onClick={handleSave} className="btn-success">Save Changes</button>
                            <button onClick={() => setIsEditing(false)} className="btn-danger">Cancel</button>
                        </div>
                    </div>
                )}
                
                <hr />
                <Link to="/" style={{textDecoration:'none', color:'#007bff'}}>← Back to Dashboard</Link>
            </div>
        </div>
    );
}