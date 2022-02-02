// Ở những nội dung đầu thì react class component sẽ hơi giống functional component

// Nhưng về sau thì nó sẽ hơi khác

// Trong bài này sẽ học về cách sử dụng state và updating state
// giúp chúng ta update lại giao diện khi có một cái sự kiện gì đó được gọi

// Nhưng về sau thì nó sẽ hơi khác

//  Truyền tham số qua sự
// Tiếp theo sẽ là cách render với điều kiện if {} => render có điều kiện trong class components

// Bữa sau sẽ nói về state và updating state
// => Khi mà cần sự kiện gì mà làm giao diện thay đổi thì để nó trong state()

// CSS trong reactjs (styling with Stylesheets - styling with module - working with inline style)
//     +  Để nhúng css vào components ta dùng cú pháp import => đường dẫn đến file .css từ component đó
//     + Lưu ý: css đó sẽ áp dụng cho toàn ứng dụng.

// Trong react có một cách rất là hay đó là đóng gói CSS
//      - Cách thứ 1: Để nhúng CSS vào trong tập tin react thì như thế nào
// Một cái típ trong react là muốn css cho component nào thì tạo file trùng tên với component đó luôn.
// + Sẽ bị ảnh hưởng hết đến tất cả component trong dự án
//      - Cách thứ 2: Module style
// + Nếu chúng ta muốn CSS đó chỉ ảnh hưởng đến cái components đó thôi.(hạn chế được việc đụng css với nhau) => Luôn luôn ưu tiên css của module đó cho components đó thôi nếu có css khác đè vào thì nó vẫn ưu tiên.
//      - Cách thứ 3: là style trực tiếp trên thẻ đó. : Trong react nó sẽ sinh ra cho chúng ta thuộc tính tên là style: , chúng ta sẽ viết css giống như chúng ta khai báo đối tượng trong css
