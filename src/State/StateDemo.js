import React, { Component } from 'react';

export default class StateDemo extends Component {
  // là thuộc tính có sẵn của component  giúp chúng ta định nghĩa những cái phần dự liệu mà trong tương lai bị tác đông của người dùng làm thay đổi

  // Cái gì mà bị thay đổi khi mà người dùng thao tác lên giao diện thì ta đặt trong state
  // Nó phải thông qua đối tượng này thì nó mới render lại giao diện
  state = {
    status: false,
  };
  //setState là phương thức có sẵn cửa reactClass component giúp thay đổi giá trị state và render lại giao diện

  userLogin = {
    // sẽ render hoặc không render nội dung của _userLogin dựa vào biến status
    name: 'Lê Hoàng Trọng',
    age: 21,
  };

  // Viết hàm xử lý sự kiện cho nút onclick
  login = () => {
    // gán biến status = true;

    // Không set theo cách giá trị trực tiếp trên state mà phải thông qua setState.
    // this.state.status = true; // Không được gán lại giá trị như thế này
    // mà nó sẽ phụ thuộc vào phương thức setState

    let newState = {
      // set lại state thì cấu trúc phải giống với state ban đầu
      status: true,
    };

    // Gọi phương thức setState để update lại giao diện => truyền vào state mới
    // setState là phương thức bất đồng bộ
    this.setState(newState, () => {
      console.log(this.state);
    }); // Có nghĩa là trong lúc thực hiện hàm này thì nó sẽ chạy luôn các câu lệnh hàm khác mà không cần phải đợi hàm này chạy

    // Như vậy thì làm sao để kiểm tra được giá trị state hiện tại sau khi đã click
    // + Tham số thứ 1: giá trị state mới
    // + Tham số thứ 2: callback thực thi ngay sau khi state thay đổi => có nghĩa là sau khi nó chạy hết câu lệnh bên trong hàm thì nó sẽ chạy câu lệnh này
    console.log(this.state.status);
  };

  renderUserLogin = () => {
    if (this.state.status) {
      return <div className="text-center">{this.userLogin.name}</div>;
    }

    // Nếu như là false thì cho nó render ra nút đăng nhập
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Login
      </button>
    );
  };
  // Giao diện render lại thì nó chỉ gọi có một lần
  //  Khi mà binding dư liệu xong thì ko thể render lại, vì vậy status chứa những cái giá trị có thể render lại
  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}

/// Tóm lại state quản lí giá trị thay đổi khi người dùng thao tác
/// setState là nó sẽ nhận vào state mới và nó gọi hàm render chính của component(giao diện sẽ được render lại)
