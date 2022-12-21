---
layout: post
title:  "Một số trường hợp kiểm thử cho URL"
author: son
categories: [ manual ]
image: assets/images/manual-testing/URL/testcase-for-url.png
donation: true
comments: true
---

Bài viết này sẽ liệt kê ra một số trường hợp kiểm thử cho một chiếc URL trên Web. 
Các bạn có thể tham khảo để áp dụng vào project của công ty hay của cá nhân nhé!



#### Nội dung bài viết:
Chúng ta sẽ liệt kê ra các trường hợp Positive Test cases , Negative Test cases và Test Cases for URL Validation nhé
* Positive Test cases for URL Field
* Negative Test cases for URL Field
* Test Cases for URL Validation

![url]({{ site.baseurl }}/assets/images/manual-testing/URL/http-https.png)

#### Positive Test cases for URL Field

* Xác minh rằng URL field có thể click hoặc nhập kí tự vào hay không.
* Xác minh người dùng có thể Paste URL vào URL field hay không.
* Xác minh Web được sử dụng để giao tiếp an toàn qua mạng máy tính có URL mang thành phần `https://` (tránh nhầm lẫn với `http://`).
* Xác minh trang khi chuyển hướng tới khi nhập URL đã phù hợp với tên miền mở rộng chưa. (ví dụ: `.edu` phù hợp với nhưng trang về giáo dục).
* Xác minh độ dài maximum và minimum của URL.
* Xác minh người dùng có thể thêm dấu khoảng trắng vào trong URL được hay không.

#### Negative Test cases for URL Field

* Xác minh rằng thông báo lỗi có được hiển thị không khi để trống URL field.
* Xác minh rằng URL field có chứa tham số hay không.
* Xác minh rằng người dùng có thể thêm hoặc xoá dấu `/` ở cuối URL hay không.
* Xác minh người dùng có thể chuyển hướng tới trang Web mà không thêm tên miền mở rộng hay không.

#### Test Cases for URL Validation

* Xác minh người dùng không thể submit một chiếc URL không hợp lệ (ví dụ: abc12345).
* Xác minh người dùng không thể submit khi để trống URL filed.

Nhưng vậy chúng ta đã có một số trường hợp kiểm thử URL filed rất hữu ích đối với mọi trang web.

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>
