import React from "react";
import "./Catalog.css";

export const Catalog = () => {
  return (
    <>
     <h1 style={{ marginLeft: "0px" }}>
        Hot Products
     </h1>
     <div className="catalog">
      <div class="product-card">
        <img alt="Skincare" class="product-image" />
        <div class="product-info">
          <h3>Discover Skincare</h3>
          <p>2 Products</p>
        <a href="#" class="view-now">View Now &gt;</a>
        </div>
      </div>
      </div>
     
    </>
  );
};
