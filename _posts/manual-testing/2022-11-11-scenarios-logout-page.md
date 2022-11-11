---
layout: post
title:  "Một số trường hợp kiểm thử chức năng đăng xuất"
author: son
categories: [ manual ]
image: assets/images/manual-testing/logout/logout.png
donation: true
comments: true
---

Trong bài đăng này, chúng ta sẽ nghiên cứu - cách viết các trường hợp kiểm thử cho chức năng Đăng xuất. Bạn có thể tham khảo các trường hợp thử nghiệm này cho các project của công ty và các project cá nhân.


Để đảm bảo trải nghiệm người dùng tốt, mình cần đảm bảo chất lượng cho các nội dung sau:
* Kiểm tra giao diện người dùng của trang đăng xuất.
* Kiểm tra chức năng đăng xuất.
* Kiểm tra bảo mật.

Dưới đây là các case kiểm thử.


### Các case kiểm tra giao diện người dùng cho Trang đăng xuất

1) Xác minh rằng sau khi người dùng đăng nhập thành công, xuất hiện nút Logout tại trang cá nhân.

2) Xác minh rằng nút Logout không được hiển thị khi người dùng chưa đăng nhập.

3) Xác minh rằng kích thước, màu sắc và giao diện người dùng của các phần tử khác nhau theo thông số kỹ thuật.

4) Xác minh rằng giao diện người dùng của ứng dụng có khả năng responsive, tức là nó sẽ điều chỉnh theo các thiết bị và độ phân giải màn hình khác nhau.

### Các case kiểm tra chức năng cho Trang đăng xuất

1) Xác minh rằng ngay khi logout người dùng chuyển hướng tới trang chủ và không thể back lại trang cá nhân.

2) Xác minh rằng khi logout người dùng không còn thấy thông tin cá nhân.

3) Đảm bảo rằng ứng dụng cho phép một lần đăng xuất từ tất cả các thiết bị.

4) Đảm bảo rằng ứng dụng cho phép bạn đăng xuất nhiều tài khoản.

5) Xác minh người dùng sau khi đang xuất có thể đăng nhập lại bình thường. 

### Các case kiểm tra bảo mật cho chức năng đăng xuất

1) Xác minh logs cho các phiên đăng nhập và đăng xuất.

2) Xác minh xem logs có chứa nhiều IP cho một ID cùng một lúc hay không.

3) Xác minh xem logs có chứa cuộc tấn công từ chối dịch vụ đối với việc đăng nhập hoặc đăng xuất hay không.

4) Xác minh xem IP trái phép có yêu cầu đăng xuất hay không.

5) Xác minh xem logs có hoạt động đáng ngờ hay không.

6) Xác minh HTTPS có trên trang đang xuất hay không.

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>



