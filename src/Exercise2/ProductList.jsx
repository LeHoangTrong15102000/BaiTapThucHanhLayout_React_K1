import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './ProductList.scss';

export default class ProductList extends Component {
  render() {
    return (
      <section className="productList">
        <h1 className="mt-5">- Features Products -</h1>
        <div className="container">
          <div className="list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>
    );
  }
}
