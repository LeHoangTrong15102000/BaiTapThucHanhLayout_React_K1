import React, { Component } from 'react';
import './SelectCar.css';

export default class SelectCar extends Component {
  // Trong bài tập này sẽ giàn layout và code chức năng chọn xe cho bài tập xe

  // Cho mảng dữ liệu xây dựng ứng dụng chọn xe.
  // Thực hiện chức năng chọn màu xe
  // Thực hiện chức năng chọn bánh xe
  // Thực hiện chức năng xoay xe sử dụng thư viện js-cloudimage-360-view
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Chứa tấm ảnh */}
          <div className="col-6">
            <div className="model">
              <img
                style={{ width: '800px' }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt="ModelCar"
              />
            </div>
          </div>

          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}
