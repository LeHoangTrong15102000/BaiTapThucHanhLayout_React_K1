import React, { Component } from 'react';

export default class DataBinding extends Component {
  // Tạo một thuộc tính
  name = 'Lê Hoàng Trọng';

  // Binding object thì sao
  student = {};

  // truy xuất đến thuộc tính của đối tượng thì dùng this.[tên đối tượng]
  render() {
    // Biến của hàm render => không sử dụng được cho hàm khác
    const school = 'CyberLearn';
    return (
      <div>
        <h1>
          Hello {this.name} - Lớp học {school}
        </h1>
      </div>
    );
  }
}
