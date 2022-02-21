import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header  className="header">
        <div className="container">
            <a href="#" className="logo">CyberPhone</a>

            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </nav>
        </div>
      </header>
    )
  }
}
