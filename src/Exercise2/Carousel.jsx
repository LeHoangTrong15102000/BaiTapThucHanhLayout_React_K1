import React, { Component } from 'react'
import PhoneImage from '../assets/image/product-header2.png'

export default class Carousel extends Component {
  render() {
    return (
      <section className="carousel">
        <div className="container">
            <div className="content">
                <h1>CyberPhone</h1>
                <span className="">Best SmartPhone of 2022</span>
                <p className="">
                    Le Hoang Trong Le Hoang Trong Le Hoang Trong Le Hoang Trong
                </p>

                <button>
                    <i class="fa fa-info-circle"></i> More Info
                </button>
                <button>
                    <i class="fa fa-shopping-cart"></i> Shop
                </button>
            </div>

            <div className="thumbnail">
                <img  src={PhoneImage} alt="PhoneCarousel"/>
            </div>
        </div>
      </section>
    )
  }
}
