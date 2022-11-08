---
layout: post
title:  "Một số trường hợp kiểm thử chức năng đăng nhập"
author: son
categories: [ manual ]
image: assets/images/manual-testing/login-form/login_case.png
donation: true
comments: true
---

Trong bài đăng này, chúng ta sẽ nghiên cứu - cách viết các trường hợp kiểm thử cho chức năng Đăng nhập. Bạn có thể tham khảo các trường hợp thử nghiệm này cho các project của công ty và các project cá nhân.


Để đảm bảo trải nghiệm người dùng tốt, mình cần đảm bảo chất lượng cho các nội dung sau:
* Kiểm tra giao diện người dùng của trang đăng nhập.
* Kiểm tra chức năng đăng nhập.
* Kiểm tra bảo mật.

Dưới đây là các case kiểm thử.


### Các case kiểm tra giao diện người dùng cho Trang đăng nhập

1) Xác minh rằng tất cả các thành phần bao gồm hộp văn bản, nút và liên kết đều có trên trang Đăng nhập.

2) Kiểm tra để đảm bảo rằng loại phông chữ và kích thước của các thành phần và văn bản được viết trên các phần tử khác nhau phải hiển thị rõ ràng.

3) Xác minh rằng kích thước, màu sắc và giao diện người dùng của các phần tử khác nhau theo thông số kỹ thuật.

4) Xác minh rằng giao diện người dùng của ứng dụng có khả năng responsive, tức là nó sẽ điều chỉnh theo các thiết bị và độ phân giải màn hình khác nhau.

### Các case kiểm tra chức năng cho Trang đăng nhập

1) Xác minh rằng ngay khi trang đăng nhập mở ra, theo mặc định, con trỏ sẽ vẫn ở trên trường Username.

2) Xác minh rằng người dùng có thể điều khiển bằng cách nhấn phím 'Tab' trên bàn phím.

3) Kiểm tra xem mật khẩu có ở dạng ẩn khi nhập vào trường mật khẩu hay không.

4) Kiểm tra xem mật khẩu có thể được sao chép hay không.

5) Xác minh rằng người dùng có thể đăng nhập bằng cách nhập thông tin đăng nhập hợp lệ và click vào nút 'Login'.

6) Xác minh rằng người dùng có thể đăng nhập bằng cách nhập thông tin đăng nhập hợp lệ và nhấn phím Enter.

7) Kiểm tra xem người dùng không thể đăng nhập bằng tên người dùng và mật khẩu không hợp lệ.

8) Xác minh rằng thông báo xác thực được hiển thị trong trường hợp người dùng để trống trường tên người dùng hoặc mật khẩu.

9) Kiểm tra xem thông báo xác thực có được hiển thị trong trường hợp người dùng vượt quá giới hạn ký tự của trường tên người dùng và mật khẩu hay không.

10) Xác minh xem có checkbox “nhớ mật khẩu” trên trang đăng nhập hay không.

12) Xác minh rằng việc đóng trình duyệt sẽ không đăng xuất người dùng đã xác thực. Khởi chạy lại app sẽ chỉ đưa người dùng đến trạng thái đăng nhập.

### Các case kiểm tra bảo mật cho chức năng đăng nhập

1) Xác minh rằng có giới hạn về tổng số lần đăng nhập không thành công. Vì vậy, người dùng không thể sử dụng cơ chế brute-force để thử tất cả các kết hợp tên người dùng-mật khẩu có thể có.

2) Xác minh rằng trong trường hợp thông tin đăng nhập không chính xác, một thông báo như “tên người dùng hoặc mật khẩu không chính xác” sẽ hiển thị. Thay vì một thông báo chính xác trỏ đến trường không chính xác. Điều này là do một thông báo như "mật khẩu không chính xác" sẽ giúp tin tặc biết rằng tên người dùng là chính xác. Bằng cách này, anh ta sẽ chỉ cần thử mật khẩu khác trên trường mật khẩu mà thôi.

3) Xác minh khoảng thời gian chờ của phiên đăng nhập. Vì vậy, người dùng đã đăng nhập không thể được xác thực trong suốt thời gian tồn tại.

4) Xác minh rằng khi đã đăng nhập, việc nhấp vào nút quay lại sẽ không đăng xuất người dùng.

5) Xác minh xem các cuộc tấn công SQL Injection có hoạt động trên trang đăng nhập hay không. Ứng dụng không được dễ bị tấn công SQL injection.

6) Xác minh rằng lỗ hổng XSS sẽ không hoạt động trên trang đăng nhập.

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>



