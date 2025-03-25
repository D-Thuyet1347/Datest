import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaAngleRight } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Search } from '../Search/Search';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import avatar from '../../assest/img/avatar.png';
import user from '../../assest/img/user.png';

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userAvatar, setUserAvatar] = useState(localStorage.getItem('user') || '');  // Lưu email đăng nhập
  
  const navigate = useNavigate();

  const cart = () => navigate('/cart');

  const service = () => navigate('/service-spa');

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Lắng nghe sự kiện scroll để đổi màu Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  // Xử lý đăng nhập
  const handleLogin = () => {
    const userAvatar = {user}
    setUserAvatar(userAvatar);
    navigate('/sign-in');
    localStorage.setItem('user', userAvatar);
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    setUserAvatar('');
    localStorage.removeItem('user');
  };

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
        <div  className="navbar-account" >
          {userAvatar ? (
            <img onClick={() => setIsMenu(!isMenu)} src={avatar} width={28} alt="Avatar" /> 
          ) : (
            <img onClick={handleLogin} src={user} width={28} alt="Avatar" />
          )}
          {isMenu && (
            <div className="menu">
              <ul>
                {userAvatar ? (
                  <>
                    <li onClick={handleLogout}>Đăng xuất</li>
                  </>
                ) : (
                  <>
                    <li onClick={handleLogin}>Đăng nhập</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
