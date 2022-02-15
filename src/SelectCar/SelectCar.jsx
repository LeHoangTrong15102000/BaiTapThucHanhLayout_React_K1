import React, { Component } from "react";
import "./SelectCar.css";
// Import mảng dữ liệu các model xe
import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";

export default class SelectCar extends Component {
  // Trong bài tập này sẽ giàn layout và code chức năng chọn xe cho bài tập xe

  // Cho mảng dữ liệu xây dựng ứng dụng chọn xe.
  // Thực hiện chức năng chọn màu xe
  // Thực hiện chức năng chọn bánh xe
  // Thực hiện chức năng xoay xe sử dụng thư viện js-cloudimage-360-view

  // Một cái giao diện xây dựng website thì cái content rất là quan trọng, sẽ có người build content riêng còn chúng ta sẽ là người phát triển sản phẩm(developer)
  //  Render ra các icon bên phía tay phải của chúng ta

  // Các dữ liệu này phải render động theo dữ liệu được truyền vào
  // Gắn sư kiện onclick cho icon để khi click vào chúng ta sẽ render lại giao diện hình ảnh của xe
  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              onclick={() => {}}
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt="IconCar"
            />
          </div>

          <div classsName="col-10">
            <h3 className="mt-4">{item.title}</h3>
            <span>{item.type}</span>
          </div>
        </div>
      );
    });
  };

  // Tiếp theo viết hàm để render ra bánh xe
  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              onclick={() => {}}
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt="IconWheel"
            />
          </div>

          <div classsName="col-10 d-flex align-items-center">
            <h5 className="p-4">{item.title}</h5>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Chứa tấm ảnh */}
          <div className="col-6">
            <div className="model">
              {/* Cho độ dài bức ảnh bằng với độ dài col-6 luôn */}
              <img
                style={{ width: "100%" }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt="ModelCar"
              />
            </div>

            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior Color</h5>
              {/* Bên dưới sẽ là một table ứng với nội dung của dữ liệu */}

              <table className="table border border-color-light" border="1">
                <tbody>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <th>$ 19.000,00</th>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <th>Inline-4-Cylinder</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior Color</h5>
              <div className="container-fluid">{this.renderIcon()}</div>
            </div>

            <div className="card text-left mt-1">
              <h5 className="card-header text-default">Wheels</h5>
              <div className="container-fluid">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
