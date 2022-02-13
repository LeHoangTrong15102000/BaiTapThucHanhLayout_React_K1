import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

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
      return <img className="ml-2 p-2 border border-width-1" key={index} style={{width: '110px', cursor: 'pointer'}} src={glassesItem.url} alt="ImgGlasses"/>
    })
  }


  // Bước 3 viết hàm xử lý sử kiện click cho giao diện và xử lý state cho mắt kính


  render() {

    const styleGlasses = {
      width: '150px',
      top: '75px',
      right: '69px',
      opacity: '0.7'
    }


    const descGlasses = {
      width: '250px',
      height: '105px',
      paddingLeft: '15px',
      top: '200px',
      left: '270px',
      backgroundColor: 'rgba(255,127,0,0.5)',
      textAlign: 'left',
    }


    
    return (
      <div style={{backgroundImage: 'url(./glassesImage/background.jpg)' ,backgroundSize: '2000px', minHeight: '2000px'}}>
        <div style={{backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px'}}>
          <h3 style={{backgroundColor: 'rgba(148,0,211, 0.3)'}} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>

          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img className="position-absolute" style={{width: '250px'}} src="./glassesImage/model.jpg" alt="model.jpg"/>
                  <img className="position-absolute" style={styleGlasses} src="./glassesImage/v1.png" alt="GlassesDefault"/>
                  <div className="position-relative" style={descGlasses}>
                    <span style={{color: '#AB82FF', fontSize: '17px'}} className="font-weight-bold">Tên kính</span>

                    <br/>
                    <span style={{fontSize: '13px', fontWeight: '400'}} className="">Mô tả</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img style={{width: '250px'}} src="./glassesImage/model.jpg" alt="model-2"/>
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
    )
  }
}