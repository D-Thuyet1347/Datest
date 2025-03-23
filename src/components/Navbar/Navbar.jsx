import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaAngleRight } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { Search } from '../Search/Search';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const cart = () => {
        navigate('/cart');
    }
    const sign = () => {
        navigate('/sign');
        setIsMenu(!isMenu);
    }
    const service = () => {
        navigate('/service-spa');
    }
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Lắng nghe sự kiện scroll để đổi màu Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="" alt="Logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Trang chủ</li>
          <li>
            Sản phẩm <div className="icon-dow"><FaAngleRight /></div>
            <ul className="dropdown">
              <li>Sản phẩm 1</li>
              <li>Sản phẩm 2</li>
              <li>Sản phẩm 3</li>
            </ul>
          </li>
          <li>
            Dịch vụ <div className="icon-dow"><FaAngleRight /></div>
            <ul className="dropdown">
              <li onClick={service}>Dịch vụ 1</li>
              <li>Dịch vụ 2</li>
              <li>Dịch vụ 3</li>
            </ul>
          </li>
          <li>Khuyến mãi</li>
          <li>Bài viết</li>
        </ul>
      </div>
      <div className="search">
        {showSearch && <Search />}
      </div>
      <div className="navbar-actions">
        <div className="navbar-search" onClick={toggleSearch}>
          <IoMdSearch />
        </div>
        <div className="navbar-wishlist">
          <FaRegHeart />
        </div>
        <div onClick={cart} className="navbar-cart">
          <IoBagHandleOutline />
        </div>
          <div onClick={sign} className="navbar-account">
            <IoPersonOutline  />
            {isMenu && <div className="menu">
              <ul>
                <li>Đăng nhập</li>
                <li>Đăng ký</li>
              </ul>
            </div>

            }
          </div>
      </div>
    </div>
  );
};
