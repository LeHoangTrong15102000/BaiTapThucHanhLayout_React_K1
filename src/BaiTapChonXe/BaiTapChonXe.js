import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  // Việc đầu tiên trước khi làm reactjs là dàn layout trước
  // Sau này sẽ học về Sass
  render() {
    // Nếu cái hình ở trong cái thư mục của chúng ta thì chèn vào như sau
    // src={require} thêm vào chữ require
    // Còn Nếu tấm hình ở trên mạng lấy xuống thì chung ta để vào cặp dấu "" src={""}

    // Video tiếp theo sẽ hướng dẫn cách xử lý sự kiện trong js cho tấm hình đổi khi người dùng click vào tấm hình
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={require("../assets/products/black-car.jpg")}
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div className='row border border-line mb-2 pt-2 pb-2' onClick={() => {}} style={{cursor: 'pointer'}}>
                
                    <img className='col-2' style={{width: '100%'}} src={require('../assets/icons/icon-black.jpg')} alt='black_icon'/>
                   
                    <div className='col-10'>
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>

                <div className='row  border border-line mb-2 pt-2 pb-2' onClick={() => {}} style={{cursor: 'pointer'}}>
                    
                    <img className='col-2' style={{width: '100%'}} src={require('../assets/icons/icon-steel.jpg')} alt='steel_icon'/>
                    
                    <div className='col-10'>
                        <h3>Modern Steel</h3>
                        <p>Metallic</p>
                    </div>
                </div>

                <div className='row  border border-line mb-2 pt-2 pb-2' onClick={() => {}} style={{cursor: 'pointer'}}>
                    <img className='col-2' style={{width: '100%'}} src={require('../assets/icons/icon-silver.jpg')} alt='silver_icon'/>
                   
                    <div className='col-10'>
                        <h3>Lunar Silver</h3>
                        <p>Metallic</p>
                    </div>
                </div>

                <div className='row  border border-line mb-2 pt-2 pb-2' onClick={() => {}} style={{cursor: 'pointer'}}>
                    
                    <img className='col-2' style={{width: '100%'}} src={require('../assets/icons/icon-red.jpg')} alt='red_icon'/>
                    
                    <div className='col-10'>
                        <h3>Rallye Red</h3>
                        <p>Metallic</p>
                    </div>
                </div>
                
              </div>
              
              
              <div className='card-footer'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
