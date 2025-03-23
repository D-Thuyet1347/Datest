import React, { useState, useEffect } from 'react';
import './Banner.css';
import anh from '../../assest/img/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.webp';

const Banner = () => {
  const images = [
    anh,
    anh,
    anh
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Hàm chuyển slide về phía trước
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Hàm chuyển slide sang bên phải
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="banner-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      {/* Nút điều hướng */}
      <button className="nav-btn prev" onClick={goToPrevious}>&#10094;</button>
      <button className="nav-btn next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default Banner;
