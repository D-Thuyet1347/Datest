import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import SignIn from './Pages/SignInPage/SignIn';
import SignUp from './Pages/SignUpPage/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>      
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
   
        </Routes>
    </div>
  );
}

export default App;
