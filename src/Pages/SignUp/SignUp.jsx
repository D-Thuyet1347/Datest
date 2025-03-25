import React, {  useState } from 'react';
import './SignUp.css';
import { registerUser } from '../../APIs/userApi';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => navigate('/sign-in');

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Gửi request đăng ký:", { email, password, confirmPassword });

    if (password !== confirmPassword) {
      message.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const data = await registerUser({ email, password ,confirmPassword});
      message.success(data.message || "Đăng ký thành công!");
      navigate("/sign-in");
    } catch (error) {
      message.error(error.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" required />
          <button disabled={!email || !password || !confirmPassword} type="submit">
            Sign Up
          </button>
        </form>
        <p onClick={handleSignIn} className="toggle-text">
          Đã có tài khoản? Đăng nhập
        </p>
      </div>
    </div>
  );
};

export default SignUp;
