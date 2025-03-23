import React from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ toggleAuthMode }) => {
    const navigate = useNavigate();
    const signin = (e) => {
        e.preventDefault();
        navigate('/');
    }
    return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button onClick={signin} type="submit">Sign In</button>
        </form>
        <p onClick={toggleAuthMode} className="toggle-text">
          Tôi chưa có tài khoản? Đăng ký
        </p>
      </div>
      
    </div>
  );
};

export default SignIn;