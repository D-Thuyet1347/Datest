import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductPage.css'

export const ProductPage = () => {
  return (
    <div className="product-page">
      <h2 className="product-section-title">Sản phẩm bán chạy</h2>
      <div className="product-list">
        <ProductCard />
      </div>
    </div>
  )
}
export default ProductPage;