import React from "react";
import "./ProductCard.css";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import product from "../../data/Product";

const ProductCard = () => {
  const navigate = useNavigate();
  // Chuyển hướng đến trang chi tiết sản phẩm
  const goToProduct = () => {
    navigate(`/product-details/${product?.id}`);
  }

  return (
    <>
      {product.map((product) => (
        <div className="product-card" onClick={goToProduct}>  
          <div className="product-icons">
            <div className="show-icon">
              <button className="icon-btn">
                <FaShoppingCart />
                <span className="note">Thêm vào giỏ hàng</span>
              </button>
              <button className="icon-btn">
                <FaEye />
                <span className="note">Xem nhanh</span>
              </button>
              <button className="icon-btn">
                <FaHeart />
                <span className="note">Thêm vào danh sách thích</span>
              </button>
            </div>
          </div>
          <Link to={`/product-details/${product.id}`}>
            <div className="product-info-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
              <h3 className="product-name">{product.name}</h3>
              <span className="product-price">{product.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
