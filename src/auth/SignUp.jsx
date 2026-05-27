import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: Date.now() };
    const users = JSON.parse(localStorage.getItem("usersDB") || "[]");
    localStorage.setItem("usersDB", JSON.stringify([...users, newUser]));
    
    alert("Account created successfully!");
    navigate('/signin');
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      
      {/* Form Card */}
      <div className="bg-white p-5 rounded-4 shadow-sm" style={{ width: '100%', maxWidth: '450px' }}>
        
        {/* Title Section */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#4f46e5' }}>Create Account</h2>
          <p className="text-muted small">Join us and start your shopping journey</p>
        </div>

        <form onSubmit={handleSignUp}>
          {/* Name Input */}
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control form-control-lg bg-light border-0" 
              placeholder="Full Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control form-control-lg bg-light border-0" 
              placeholder="Email Address"
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control form-control-lg bg-light border-0" 
              placeholder="Password"
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
            />
          </div>

          {/* Sign Up Button */}
          <button 
            type="submit" 
            className="btn btn-primary btn-lg w-100 mt-2" 
            style={{ backgroundColor: '#4f46e5', border: 'none' }}
          >
            Sign Up
          </button>

          {/* Footer Link */}
          <div className="text-center mt-3">
            <p className="small text-muted">
              Already have an account? <Link to="/signin" className="text-decoration-none fw-bold" style={{ color: '#4f46e5' }}>Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
