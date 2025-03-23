import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import './Home.css';
import { Catalog } from '../../components/Catalog/Catalog';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductPage } from '../ProductPage/ProductPage';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  return (
  <>
      <div className="nav">
      <Navbar />
      <Banner />
      </div>
      <div className="cotent">
        <Catalog />
      </div>
      <div className="product">
        <ProductPage />
      </div>
      <div className="footer">
        <Footer />
      </div>
  </>
  );
};
