import React from 'react';

export default function DataBindingRFC() {
  // react function rất là hay và doanh nghiệp thường hay xài thằng này
  // những cái project dữ án thường hay xài t hằng này hơn

  // Function thì chỉ có biến thôi ko có thuộc tính hay phương thức gì hết

  // chỉ được bao bộc bới 1 thẻ duy nhất

  const name = 'Lê Hoàng Trọng';
  return (
    <div>
      <h1 className="text-danger">{name}</h1>
    </div>
  );
}
