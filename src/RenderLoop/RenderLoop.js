import React, { Component } from 'react';

export default class RenderLoop extends Component {
  // Tất cả các đối tượng render ra phải giống nhau
  // React cho phép chúng ta sử dụng vòng lặp để render mảng dữ liệu.

  // binding dữ liệu dựa trên hình ảnh

  // Vì vậy đối với những hình ảnh ko cần require thì phải copy nó lên thư mục là public

  /**
   * Chú thích về loop trong reactjs
   * map là phương thức mạnh để render ra giao diện người dùng
   */

  productList = [
    {
      id: 1,
      name: 'black car',
      price: 1000,
      img: './carbasic/products/black-car.jpg',
    },
    {
      id: 2,
      name: 'red car',
      price: 1000,
      img: './carbasic/products/red-car.jpg',
    },
    {
      id: 3,
      name: 'silver car',
      price: 1000,
      img: './carbasic/products/silver-car.jpg',
    },
    {
      id: 4,
      name: 'steel car',
      price: 1000,
      img: './carbasic/products/steel-car.jpg',
    },
  ];

  // Có 2 cách viết là một là viết trực tiếp lên luôn 2 là cách viết cố điển nhất(là trả về một mảng các cái components)

  renderTable = () => {
    // tạo mảng tr Rỗng
    let mangTrComponent = [];

    for (let index = 0; index < this.productList.length; index++) {
      let product = this.productList[index]; // lấy ra từng phần tử trong mảng productList

      // Đối tượng jsx (có thể console.log để kiểm tra)
      // console.log(<tr><tr/>)

      // binding dữ liệu đối tượng ra
      let trJSX = (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: '150px' }} src={product.img} alt="ImgSource" />
          </td>
        </tr>
      );

      console.log('trJSX', trJSX);

      // trJSX là một đối tượng chứ ko phải là một thẻ HTML bình thường
      // Đối tượng thì phải thêm thuộc tính key={} truyền vào cho nó
      mangTrComponent.push(trJSX);
    }

    // Một là nó phải render ra , 2 là phải render ra mảng component
    // return về một cái mảng bình thường hoặc cái gì đó là không được mà nó phải return về mảng component thì mới được
    // luôn phải trả về mảng các component không thể trả về mảng object được
    return mangTrComponent;
  };

  // Tiếp theo sẽ render giao diện với phương thức là map
  // Map() thực thi khi mà chúng ta sử dụng một mảng dữ liệu và render ra mảng dữ liệu mới

  // Những cái component được tạo ra từ vòng lặp for hoặc map thì đều phải có đối tượng là key={}
  renderTable1 = () => {
    let contentTable = this.productList.map((product, index) => {
      // từ dữ liệu sản phẩm tạo ra 1 tag component <tr> chứa thông tin sản phẩm

      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img
              style={{ width: '150px', height: '100px' }}
              src={product.img}
              alt="ImgSource"
            />
          </td>
          <td>
            <button className="btn btn-primary mr-2">Chỉnh Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });

    return contentTable;
  };

  // Bài tập render With map components

  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
              {this.renderTable1()}
            </tbody>
          </table>
        </div>

        {/* <img src={this.productList[0].img} alt="ImgSource" /> */}
      </div>
    );
  }
}
