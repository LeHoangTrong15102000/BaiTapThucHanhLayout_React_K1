import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';
// import './TryGlasses.css';

export default class TryGlasses extends Component {
  // Các bước làm project
  // Bước 1: Tạo giao diện cho ứng dụng thử kính
  // Bước 2: Load những phần dữ liệu của giao diện từ json
  // Bước 3: Xác định thành phần thay đổi trên giao diện -> lưu trữ vào state

  // Chia 2 cô người mẫu một cô có kính và một cô không có kính
  // row thì phải chứa trong container không thì nó sẽ sinh ra thanh roll ngang
  // Bố trí 2 cô người mẫu đơn giản cho 2 cái hình vào
  // CSS cho cặp kính mặc định hiển thị lên cho cô người mẫu phía trên trái (Nên làm những giap diện tĩnh trước sau đó chạy động rất là nhanh)
  // Để cai desc phía dưới tấm hình

  // Bước 2: Render những kính bên dưới, cách thức chọn kính và tổ chức dữ liệu như thế nào
  // Load những phần dữ liệu của giao diện JSON ra

  // Viết hàm render ra giao diện người dùng
  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlasses(glassesItem);
          }} // cho nó một cái sự kiện
          className="ml-2 p-2 border border-width-1"
          key={index}
          style={{ width: '110px', cursor: 'pointer' }}
          src={glassesItem.url}
          alt="ImgGlasses"
        />
      );
    });
  };

  // Bước 3 viết hàm xử lý sử kiện click cho giao diện và xử lý state cho mắt kính
  // Xử lý sự kiện thay đổi kính sử dụng state và animation
  // Trước tiên xác nhận các thông tin cần thay đổi đó là kính, thông tin kính(tên, mô tả) => tuy nhiên chúng ta có thể gom nó lại thành một đối tượng mỗi lần chúng ta click vào nó sẽ thay đổi cả 3 thuộc tính của kính.

  // Những cái thay đổi thì chúng ta lưu vào state
  state = {
    // Ban đầu cho model thuộc tính mặc định
    glassesCurrent: {
      id: 1,
      price: 30,
      name: 'GUCCI G8850U',
      url: './glassesImage/v1.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
  };

  // Xây dựng sự kiện onclick khi nhấn vào nó sẽ thay thế thuộc tính của kính
  changeGlasses = (newGlasses) => {
    this.setState({
      // thay thế thuộc tính của kính hiện tại bằng kính mới
      glassesCurrent: newGlasses,
    });
  };

  // DO cơ chế của React nên Animation chỉ chạy được 1 lần duy nhất trong react khi ban đầu load trang
  // Để Render lại nhiều lần thì khi mà render giao diện chúng ta render lại animation luôn

  render() {
    // Mỗi lần render lại sẽ tạo một biến keyframe
    const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
      from {
        width: 0;
        opacity: 0;
        transform: rotate(45deg)
      }
      to {
        width: 150px;
        opacity: 0.7;
        transform: rotate(0deg)
      }
    }`;

    // Animation chỉ chạy một lần muốn render lại animation thì chúng ta phải gán cái tên khác của animation cho kính của chúng ta
    // Dùng Date.now() nó sẽ tạo ra nhiều animation đống trên thẻ Style của chúng ta
    const styleGlasses = {
      width: '150px',
      top: '75px',
      right: '69px',
      opacity: '0.7',
      transform: 'rotate(0deg)',
      // Cũng sẽ render động ở chỗ này luôn
      animation: `animChangeGlasses${Date.now()} 0.8s`,
    };

    const descGlasses = {
      width: '250px',
      height: '105px',
      paddingLeft: '15px',
      top: '200px',
      left: '270px',
      backgroundColor: 'rgba(255,127,0,0.5)',
      textAlign: 'left',
    };

    return (
      <div
        style={{
          backgroundImage: 'url(./glassesImage/background.jpg)',
          backgroundSize: '2000px',
          minHeight: '2000px',
        }}
      >
        {/* Vừa Render lại giao diện vừa render lại animation */}
        <style>{keyFrame}</style>
        <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
          <h3
            style={{ backgroundColor: 'rgba(148,0,211, 0.3)' }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>

          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: '250px' }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    className="position-absolute glassesStyle"
                    style={styleGlasses}
                    src={this.state.glassesCurrent.url}
                    alt="GlassesDefault"
                  />
                  <div className="position-relative" style={descGlasses}>
                    <span
                      style={{ color: '#AB82FF', fontSize: '17px' }}
                      className="font-weight-bold"
                    >
                      {this.state.glassesCurrent.name}
                    </span>

                    <br />
                    <span
                      style={{ fontSize: '14px', fontWeight: '400' }}
                      className=""
                    >
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: '250px' }}
                  src="./glassesImage/model.jpg"
                  alt="model-2"
                />
              </div>
            </div>
          </div>

          {/* Chứa nội dung của danh sách các kính */}
          <div className="bg-light mt-5 p-5 container text-center d-flex justify-content-center">
            {/* Gọi hàm RenderGlassesList */}
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
