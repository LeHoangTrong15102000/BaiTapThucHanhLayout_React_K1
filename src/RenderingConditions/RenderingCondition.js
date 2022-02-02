import React, { Component } from 'react';

class RenderingCondition extends Component {
  //  Thuộc tính
  login = true;
  userName = 'Lê Hoàng Trọng';

  // Nếu điều kiện chúng ta phức tạp thì có thể viết ra cai function render luôn
  // Phương thức render ra giao diện
  renderContent = () => {
    if (this.login) {
      return <p>Hello {this.userName}</p>;
    }

    return <button className="btn btn-primary">Đăng nhập</button>;
  };

  // Nếu mà đúng thì hiển thị ra userName là tên đăng nhập còn nếu mà sai thì hiển thị ra là <button>Đăng Nhập</button>
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default RenderingCondition;
