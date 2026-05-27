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
    <div className="container-fluid vh-100 d-flex p-0">
    
      <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center p-5 text-white" 
           style={{ backgroundColor: '#000' }}>
        <h1 className="fw-bold display-4">JOIN SHOP.CO</h1>
        <p className="lead mt-3">Be a part of the future of fashion. Create your account today!</p>
      </div>

      {/* Right Side: Form */}
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center bg-white p-4">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="fw-bold mb-4">Create Account</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-3 py-2">Sign Up</button>
            <p className="text-center mt-3 small">Already have an account? <Link to="/signin" className="fw-bold text-dark">Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;