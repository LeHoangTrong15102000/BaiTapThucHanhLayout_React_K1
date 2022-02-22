import React, { Component } from 'react';
import Product1 from '../assets/image/product1.png';
import './ProductItem.scss';

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-item">
        <img src={Product1} alt="ImgProductItem" />
        <div className="heading">
          <h1>CyberBeats</h1>
          <p>$99.99</p>
        </div>
        <p className="category">Accessories</p>

        <div className="action">
          <p className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>

          <button className="btn-buy">
            <i className="fa fa-shopping-cart"></i>Buy now
          </button>
        </div>
      </div>
    );
  }
}
