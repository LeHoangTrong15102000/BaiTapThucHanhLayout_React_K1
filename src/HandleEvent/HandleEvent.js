import React, { Component } from 'react';

export default class HandleEvent extends Component {


  // Định nghĩa hàm xử lý sự kiện khi người dùng click vào nút button\
  handleClick = (name) => {
    alert("Hello " + name)
  }
  // Hàm truyền vào ko có dấu "()" chỉ khi người dùng nhấn vào thì mới gọi hàm ra

  // Có thể dùng arrow function để định nghĩa sự kiện như bên dưới


  // Cũng có thể trong arrow function chúng ta có thể gọi hàm từ bên ngoài vào

  // khi mà một arrow function khi mà chạy thì nó sẽ thực thi cái hàm đó ngay và nó không đợi người dùng nhấn vào
  //  Thì thay vào đó chúng ta có thể định nghĩa function ẩn danh ngay trên nút onclick của chúng ta


  // Truyền tham số xử lý khi click

  // Nên đặt các function xử lý ở bên trên , còn function bình thường thì đặt ở ngoài, nên vậy nên sử dụng function arrow nặc danh
  handleClickParam = (param) => {
    alert("Param: " + param)
  }

  render() {
    // Đối với functional thì nó sẽ định nghĩa ở trong đây
    const handleClickFunction = (name) => {
      alert("Hello " + name)
    }
    return <div>

      <button id="btnClickMe" onClick={() => {
        handleClickFunction("Le Hoang Trong Trem Trem")
      }}>CLick me!!</button>

      <button id="btnClickMe1" onClick={() => {
        this.handleClick("Le Hoang Trong")
      }}>CLick me!!</button>

      <button id="btnClickMe2" class="" onCLick={this.handleClickParam.bind(this, "Huynh Thi Bích Tram")}>CLick</button>

    </div>;
  }
}
