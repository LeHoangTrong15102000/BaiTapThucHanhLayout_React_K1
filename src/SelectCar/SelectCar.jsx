import React, { Component } from 'react';
import './SelectCar.css';
// Import mảng dữ liệu các model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';

export default class SelectCar extends Component {
  // Trong bài tập này sẽ giàn layout và code chức năng chọn xe cho bài tập xe

  // Cho mảng dữ liệu xây dựng ứng dụng chọn xe.
  // Thực hiện chức năng chọn màu xe
  // Thực hiện chức năng chọn bánh xe
  // Thực hiện chức năng xoay xe sử dụng thư viện js-cloudimage-360-view

  // Một cái giao diện xây dựng website thì cái content rất là quan trọng, sẽ có người build content riêng còn chúng ta sẽ là người phát triển sản phẩm(developer)
  //  Render ra các icon bên phía tay phải của chúng ta

  // Các dữ liệu này phải render động theo dữ liệu được truyền vào
  // Gắn sư kiện onclick cho icon để khi click vào chúng ta sẽ render lại giao diện hình ảnh của xe

  // Xử lý nghiệp vụ khi mà click vào màu xe thì nó sẽ thay đổi hình ảnh
  // Khi mà click vào thì chúng ta sẽ lấy cái item mà nó render ra
  // Nhiệm vụ bây giờ là click vào những icon màu và đổi màu cho xe = cách set lại giá trị mới cho carCurrent từ carItem

  // Nhưng có một điều là mỗi lần nhấn vào thì nó sẽ hiện ra một canvas mới => mỗi lần append thì nó sẽ tác dụng lên cái script , khi mà chọt code của nó thì phải hiểu luồn đi của nó
  // Đó là kinh nghiệm của làm nhiều dự án -> những kĩ thuật tích góp sau nhiều năm đi làm

  // Các giá trị nào thay đổi thì sẽ nằm trong thuộc tính state

  state = {
    // Copy hết toàn bộ thuộc tính của xe màu đỏ vào trong
    // Thuộc tính srcImg sẽ dẫn đến folder động của chiếc xe
    carCurrent: {
      id: 4,
      title: 'Rallye Red',
      type: 'Metallic',
      img: './images/icons/icon-red.jpg',
      srcImg: 'images-red/images-red-1/',
      color: 'Red',
      price: '22,550',
      engineType: 'In-Line 4-Cylinder',
      displacement: '1996 cc',
      horsepower: '158 @ 6500 rpm',
      torque: '138 lb-ft @ 4200 rpm',
      redline: '6700 rpm',
      wheels: [
        {
          idWheel: 1,
          srcImg: 'images-red/images-red-1/',
        },
        {
          idWheel: 2,
          srcImg: 'images-red/images-red-2/',
        },
        {
          idWheel: 3,
          srcImg: 'images-red/images-red-3/',
        },
      ],
    },
  };

  changeCar = (newCar) => {
    this.setState({
      // set lại giá trị cho carCurrent bằng màu sẽ click hiện tại
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        // mình sẽ truyền vào cho nó cái item, item là new car
        <div
          onClick={() => {
            this.changeCar(item);
          }}
          style={{ cursor: 'pointer' }}
          className="row mt-1 border border-color-default m-3"
          key={index}
        >
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: '100%' }}
              src={item.img}
              alt="IconCar"
            />
          </div>

          <div className="col-10">
            <h3 className="mt-4">{item.title}</h3>
            <span>{item.type}</span>
          </div>
        </div>
      );
    });
  };

  //Viết phương thức changeWheel
  changeWheel = (newWheel) => {
    // tìm trong state hiện tại (this.state.carCurrent.wheels) có cái bánh cần tìm không nếu mà có thì sẽ lấy cái source của bánh đó gán lên trên

    //Đầu tiên sẽ lấy ra object Wheel

    let objWheel = this.state.carCurrent.wheels.find(
      (item) => item.idWheel === newWheel.idWheel
    ); // tìm kiếm thử xem trong dataFeature có cái idWheel trùng với idWheel mà mình click trên giao diện hay không

    // Nếu như cái objWheel này tìm thấy
    if (objWheel !== -1) {
      // lấy ra source hình ảnh từ this.state.carCurrent.wheels

      this.setState({
        // lấy lại các thuộc tính của carCurrent và gán giá trị mới cho thuộc tính srcImg
        // Gán giá giá trị của srcImg được click trúng
        carCurrent: { ...this.state.carCurrent, srcImg: objWheel.srcImg },
      });
    }
  };
  // Tiếp theo viết hàm để render ra bánh xe
  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeWheel(item);
          }}
          style={{ cursor: 'pointer' }}
          className="row mt-1 border border-color-default m-3"
          key={index}
        >
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: '100%' }}
              src={item.img}
              alt="IconWheel"
            />
          </div>

          <div className="col-10 d-flex align-items-center">
            <h5 className="p-4">{item.title}</h5>
          </div>
        </div>
      );
    });
  };

  // Viết hàm khi click vào thay đổi màu sắc của xe

  // Khi mình để vào thì component script nó sẽ khác thường hơn với những HTML bình thường(nó cũng sẽ render bất đồng bộ là render cùng lúc với thẻ div),
  // Thì trong react sẽ có một hàm chạy sau hàm render

  // Nhưng mà khi viết vào rồi mà nó vẫn không thay đổi thì chúng ta sẽ tìm hiểu thêm một lifeCycle nữa
  // Components
  //  Tự nhiên react quản lí data dựa trên state , thì mỗi lần thay đổi state thì nó chỉ thay đổi nguồn data mà thôi
  // Cho nên chiếc xe nó sẽ không đổi màu nữa mặc dù cái source đã thay đổi => vì vậy chúng ta phải mượn tới một cái lifeCycle nữa

  componentDidMount = () => {
    // Đây là phương thức có sẵn của components
    // Hàm này sẽ tự thực thi sau khi hàm render được chạy , Lưu ý componentDidMount chỉ chạy 1 lần đầu tiên sau khi render thực thi
    // Chơi js thuần luôn miễn là biết được flow của ứng dụng thì mình có thể đục được bất kì cái thư viện nào luôn

    // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js"></script>

    let tagScript = document.createElement('script'); // tạo ra một thẻ script từ js thuần
    tagScript.src =
      'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js';

    document.querySelector('#appendScript').appendChild(tagScript);
  };

  componentDidUpdate = () => {
    // Hàm này chạy sau khi state thay đổi (tự kích hoạt sau render)
    // Lưu ý: Không được phép setState tại component này => Nếu mà setState trong đây thì nó sẽ bị vòng lặp vô tận

    // clear các canvas khi mà nó tạo ra trước đó, clear ảnh cũ
    document.querySelector('#carCurrent').innerHTML = ''; // Nếu có thẻ thì clear và cho nó là rỗng

    // Thì ở đây chúng ta sẽ lại tạo ra một thẻ script tiếp tục append vào giao diện nữa => sau khi state thay đổi
    let tagScript = document.createElement('script'); // tạo ra một thẻ script từ js thuần
    // https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js
    tagScript.src =
      'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

    // Clear script cũ trước khi append script mới của thư viện vào
    document.querySelector('#appendScript').innerHTML = '';
    document.querySelector('#appendScript').appendChild(tagScript);

    //   <div
    //   style={{minWidth: '100%'}}
    //   className="cloudimage-360"

    //   // Thay dữ liệu động vào trong thuộc tính data-folder
    //   // Má nó nhứt cái đầu
    //   data-folder={ './images/' + this.state.carCurrent.srcImg}
    //   data-filename-x="civic-{index}.jpg"
    //   data-amount-x="8"
    // ></div>

    // Có nghĩa là sau khi thằng ở trên render lại thì lại tiếp tục append cái script mới vào nữa
    // Luôn luôn thư viên sẽ có 2 hàm , 1 hàm đồng bộ và 1 hàm bất đồng bộ
    // lazy load là chúng ta load giao diện bằng js
  };

  // Viết hàm xử lý bánh xe cho Xe
  // Đi tìm cái id trong cái dataWheel và so sanh với id trong data  Features nếu nó khác nhau thì sẽ thay thế srcImg trong cái file đó.

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Chứa tấm ảnh */}
          <div className="col-6">
            <div className="model" style={{ width: '100%' }}>
              {/* Cho độ dài bức ảnh bằng với độ dài col-6 luôn */}
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt="ModelCar"
              /> */}

              {/* Thẻ div chứa thuộc tính xoay của xe  */}
              {/* Cho minWidth thì nó sẽ ưu tiên hơn */}
              <div
                id="carCurrent"
                style={{ minWidth: '100%' }}
                className="cloudimage-360"
                // Thay dữ liệu động vào trong thuộc tính data-folder
                // Má nó nhứt cái đầu
                data-folder={'./images/' + this.state.carCurrent.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
            </div>

            {/* Thẻ script chứa thư viện xoay 360  */}
            <div id="appendScript"></div>

            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior Color</h5>
              {/* Bên dưới sẽ là một table ứng với nội dung của dữ liệu */}

              <table className="table border border-color-light" border="1">
                <tbody>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <th>$ 19.000,00</th>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <th>Inline-4-Cylinder</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior Color</h5>
              <div className="container-fluid">{this.renderIcon()}</div>
            </div>

            <div className="card text-left mt-1">
              <h5 className="card-header text-default">Wheels</h5>
              <div className="container-fluid">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
