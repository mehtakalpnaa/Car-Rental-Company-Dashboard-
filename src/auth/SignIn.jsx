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
    <div className="container-fluid vh-100 d-flex p-0">
    
      <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center p-5 text-white" 
           style={{ backgroundColor: '#000' }}>
        <h1 className="fw-bold display-4">SHOP.CO</h1>
        <h2 className="fw-bold mt-4">WELCOME BACK TO FASHION.</h2>
        <p className="mt-3 text-secondary">Sign in to unlock your personalized feed, track orders, and discover tailored recommendations built specifically for your style.</p>
        <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: '#1a1a1a' }}>
          <p className="mb-2">"SHOP.CO completely transformed my shopping experience. The style recommendations are spot-on, and the quality is absolutely unmatched!"</p>
          <p className="fw-bold mb-0">- Sarah M.</p>
          <small className="text-secondary">Verified Customer</small>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center bg-white p-4">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="fw-bold mb-2">SIGN IN</h2>
          <p className="text-muted mb-4">Enter your details below to continue your journey.</p>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label">Password</label>
                <Link to="/forgot-password" style={{ fontSize: '12px', color: '#000' }}>Forgot password?</Link>
              </div>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-3 py-2" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            <p className="text-center mt-3 small">Don't have an account? <Link to="/signup" className="fw-bold text-dark">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;