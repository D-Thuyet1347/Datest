import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../APIs/userApi';
import { notifyError, notifySuccess, ToastContainer } from '../../utils/toast';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
      try{
        const data = await loginUser({ email, password });
        if(data.isEmail){
          notifySuccess(data.message || "Đăng nhập thành công!");
          
          navigate("/");
        }else{
          notifyError("Tài khoản hoặc mật khẩu không đúng!");
        }
      }catch(error){
        notifyError(error.message || "Đăng nhập thất bại!");
      }
    }
    const handleSignUp = () => navigate('/sign-up');
    


    const handleOnChageEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleOnChagePassword = (e) => {
        setPassword(e.target.value);
    }
 
    return (
      <div className="signin-container">
    <ToastContainer />
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <input value={email} onChange={handleOnChageEmail} placeholder="Email" required />
          <input value={password} onChange={handleOnChagePassword} placeholder="Password" required />
          <button onClick={handleSignIn} type="submit">Sign In</button>
        </form>
        <p onClick={handleSignUp} className="toggle-text">
          Tôi chưa có tài khoản? Đăng ký
        </p>
      </div>
      
    </div>
  );
};

export default SignIn;