import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { initialUsers } from '../data/UserData.'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = initialUsers.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/dashboard');
      } else {
        alert("Invalid credentials!");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      
    
      <div className="bg-white p-5 rounded-4 shadow-sm" style={{ width: '100%', maxWidth: '450px' }}>
        
        {/* Title Section */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#4f46e5' }}>Login</h2>
          <p className="text-muted small">Enter your details to sign in to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control form-control-lg bg-light border-0" 
              placeholder="Enter your username/email"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control form-control-lg bg-light border-0" 
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="btn btn-primary btn-lg w-100 mt-2" 
            style={{ backgroundColor: '#4f46e5', border: 'none' }}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* Footer Link */}
          <div className="text-center mt-3">
            <p className="small text-muted">
              Don't have an account? <Link to="/signup" className="text-decoration-none fw-bold" style={{ color: '#4f46e5' }}>Signup Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
