import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import ProductList from './ProductList'
import ProductItem from './ProductItem'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
       
        <Footer />
      </div>
    )
  }
}
