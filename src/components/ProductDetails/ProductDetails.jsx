import React from 'react'
import {  useParams } from 'react-router-dom';
import './ProductDetails.css';
import product from '../../data/Product';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Navbar } from '../Navbar/Navbar';


export const ProductDetails = () => {
  const { id } = useParams();
  const [quantaity, setQuantaity] = React.useState(1);

  const quantityminus = () => {
    if (quantaity > 1) {
      setQuantaity(quantaity - 1);
    }
  };
  const quantityplus = () => {
    setQuantaity(quantaity + 1);
  }


  return (
   <>
    {
      product.map((item) => {
        if (item.id == id) {
          return (
            <div className="product-details" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="product-details__info">
                <h2>{item.name}</h2>
                <p>{item.catalog}</p>
                <p>Price: ${item.price}</p>
              <div className="product-details__actions">
                <div className='btn-quanlity'>
                  <div onClick={quantityminus} className="minus"><BiMinus/></div>
                  <span>{quantaity}</span>
                  <div onClick={quantityplus} className="plus"><BiPlus/></div>
                <button className="btn">Thêm vào giỏ hàng</button>
                </div>
                <button className="btn">Mua ngay</button>
              </div>
              </div>
            </div>
          );
        }
        return null;
      })
    }
   </>
  );
};
