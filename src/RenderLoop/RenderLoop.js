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
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>

        {/* <img src={this.productList[0].img} alt="ImgSource" /> */}
      </div>
    );
  }
}
