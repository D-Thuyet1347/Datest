import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignPage from './Pages/SignPage/SignPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { Card } from './components/Card/Card';
import ServiceSpa from './components/ServicesSpa/ServiceSpa';

function App() {
  return (
    <div className="App">
      <div className="khoi">
        <Routes>      
          <Route path="/sign" element={<SignPage />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Card/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/service-spa" element={<ServiceSpa/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
