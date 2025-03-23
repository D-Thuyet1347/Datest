import React, { useState } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';


const SignPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {isSignUp ? <SignUp toggleAuthMode={toggleAuthMode} /> : <SignIn toggleAuthMode={toggleAuthMode} />}
      </div>
    </div>
  );
};
export default SignPage;