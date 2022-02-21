import React, { Component } from "react";
import PhoneImage from "../assets/image/product-header2.png";
import CarouselBackground from "../assets/image/product-header-bg.jpg";
import "./Carousel.scss";

export default class Carousel extends Component {
  // Bắt buộc phải viết backgroundImage vào bên trong thẻ section
  render() {
    return (
      <section
        style={{ backgroundImage: `url(${CarouselBackground})`, width: "100%" }}
        className="carousel"
      >
        <div className="container">
          <div className="content">
            <h1>CyberPhone</h1>
            <span className="">Best SmartPhone of 2022</span>
            <p className="">
              Le Hoang Trong Le Hoang Trong Le Hoang Trong Le Hoang Trong Le
              Hoang Trong Le Hoang Trong Le Hoang Trong Le Hoang Trong
            </p>

            <div className="mt-2">
              <button className="btn-info">
                More Info
                <i className="fa fa-info-circle ml-1"></i>
              </button>
              <button className="btn-shop ml-2">
                Shop
                <i className="fa fa-shopping-cart ml-1"></i>
              </button>
            </div>
          </div>

          <div className="thumbnail">
            <img src={PhoneImage} alt="PhoneCarousel" />
          </div>
        </div>
      </section>
    );
  }
}
