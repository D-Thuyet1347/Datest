import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { Card } from './components/Card/Card';
import ServiceSpa from './components/ServicesSpa/ServiceSpa';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>      
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Card/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/service-spa" element={<ServiceSpa/>} />
        </Routes>
    </div>
  );
}

export default App;
