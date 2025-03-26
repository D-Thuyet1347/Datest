import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import './Home.css';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  return (
  <>
      <div className="nav">
      <Navbar />
      <Banner />
      </div>
 
      <div className="footer">
        <Footer />
      </div>
  </>
  );
};
