import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log('Login attempt:', { username, password, userType });
    alert('Login functionality will be implemented soon!');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="college-info">
          <div className="college-header">
            <h1 className="college-abbr">MTUCI</h1>
          </div>
          
        </div>
      </div>

      <div className="login-right">
        <div className="login-container">
          <header className="login-header">
            <nav className="login-nav">
              <span 
                className="nav-logo"
                onClick={handleBackToHome}
                style={{ cursor: 'pointer' }}
              >
                <img 
                src="/images/back.jpg" 
                alt="logo" 
                className='logo'
                />
              </span>
              <div className="nav-links">
                <button className="nav-link">ABOUT</button>
                <button className="nav-link">CONTACTS</button>
              </div>
            </nav>
          </header>

          <div className="login-form-container">
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="user-type-selector">
                <button
                  type="button"
                  className={`user-type-btn ${userType === 'student' ? 'active' : ''}`}
                  onClick={() => setUserType('student')}
                >
                  Student
                </button>
                <button
                  type="button"
                  className={`user-type-btn ${userType === 'staff' ? 'active' : ''}`}
                  onClick={() => setUserType('staff')}
                >
                  Staff
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Sign In
              </button>

              <div className="login-footer">
                <button 
                  type="button" 
                  className="back-home-btn"
                  onClick={handleBackToHome}
                >
                  ← Back to Home
                </button>
                <a href="#forgot" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;