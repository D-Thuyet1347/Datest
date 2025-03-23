import React from 'react';
import './SignUp.css';

const SignUp = ({ toggleAuthMode }) => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button  type="submit">Sign Up</button>
        </form>
        <p onClick={toggleAuthMode} className="toggle-text">
          Đã có tài khoản? Đăng nhập
        </p>
      </div>
      
    </div>
  );
};

export default SignUp;
