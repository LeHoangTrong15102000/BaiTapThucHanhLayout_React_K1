import React, { Component } from 'react';
import Child from './Child';
// Đường dẫn css chỉ đơn thuần là đãn đường dẫn css tới component thôi
import './Styling.css';
import style from './Styling.module.css';

class Styling extends Component {
  render() {
    // Lưu ý: viết dưới dạng thuộc tính document.querySelector('#id').style.backgroundColor =
    const styleText = {
      color: 'pink',
      pađing: '15px',
      backgroundColor: 'back',
    };

    // Sử dụng dưới dạng đối tượng thì nhúng vào cũng phải dưới dạng đối tượng
    // Đè vào như vậy thì những cái đoạn code có ghi đè cũng sẽ không bị ảnh hưởng.

    // Tất cả các components của react đều cung cấp đối tượng là style để chúng ta nhận vào css dưới dạng là JS

    // Đó là cách css đóng gói cho một components
    return (
      <div>
        <Child />

        <p className="txt">Hello Le Hoang Trong</p>
        <span className={style.txtStyle}>Hello Trọng CyberLearn</span>

        <span className style={styleText}>
          Huỳnh Thị Trem Trem
        </span>
      </div>
    );
  }
}

export default Styling;
