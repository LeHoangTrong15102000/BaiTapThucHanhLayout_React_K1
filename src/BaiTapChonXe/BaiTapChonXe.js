import React, { Component } from 'react';

export default class BaiTapChonXe extends Component {
  // Việc đầu tiên trước khi làm reactjs là dàn layout trước
  // Sau này sẽ học về Sass

  // Tạo ra một thuộc tính để quản lí thông tin hình
  constructor(props) {
    super(props); //  được kế thừa từ

    // Khi mà click vào phần nào thay đổi thì đưa tất cả các giá trị đó vào state luôn
    // Chỉ có thay đổi thì hãy đưa vào còn không thì không cần phải đưa vào
    this.state = {
      // ban đầu ta muốn tấm hình đó là màu đen
      img: '../assets/products/black-car.jpg',
    };
  }
  render() {
    // Nếu cái hình ở trong cái thư mục của chúng ta thì chèn vào như sau
    // src={require} thêm vào chữ require
    // Còn Nếu tấm hình ở trên mạng lấy xuống thì chung ta để vào cặp dấu "" src={""}

    // Video tiếp theo sẽ hướng dẫn cách xử lý sự kiện trong js cho tấm hình đổi khi người dùng click vào tấm hình

    // Cách làm là sử dụng state để lưu trữ thuộc tính img của hình
    // Tạo các button tương ứng xử lý state thay đổi.

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: '100%' }}
              src={require('../assets/products/black-car.jpg')}
              // src={require(this.state.img)}
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-line mb-2 pt-2 pb-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2"
                    style={{ width: '100%' }}
                    src={require('../assets/icons/icon-black.jpg')}
                    alt="black_icon"
                  />

                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>

                {/**Viết chú thích vào trong đầy nè
                 *
                 */}

                <div
                  className="row  border border-line mb-2 pt-2 pb-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2"
                    style={{ width: '100%' }}
                    src={require('../assets/icons/icon-steel.jpg')}
                    alt="steel_icon"
                  />

                  <div className="col-10">
                    <h3>Modern Steel</h3>
                    <p>Metallic</p>
                  </div>
                </div>

                <div
                  className="row  border border-line mb-2 pt-2 pb-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2"
                    style={{ width: '100%' }}
                    src={require('../assets/icons/icon-silver.jpg')}
                    alt="silver_icon"
                  />

                  <div className="col-10">
                    <h3>Lunar Silver</h3>
                    <p>Metallic</p>
                  </div>
                </div>

                <div
                  className="row  border border-line mb-2 pt-2 pb-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2"
                    style={{ width: '100%' }}
                    src={require('../assets/icons/icon-red.jpg')}
                    alt="red_icon"
                  />

                  <div className="col-10">
                    <h3>Rallye Red</h3>
                    <p>Metallic</p>
                  </div>
                </div>
              </div>

              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
