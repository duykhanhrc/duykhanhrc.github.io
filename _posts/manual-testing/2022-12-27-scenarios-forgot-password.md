---
layout: post
title:  "Một số trường hợp kiểm thử chức năng quên mật khẩu"
author: son
categories: [ manual ]
image: assets/images/manual-testing/forgot-password/forgot-password-testcases.png
donation: true
comments: true
---

Bài viết này sẽ nêu lên một số trường hợp kiểm thử cho chức năng quên mật khẩu. Trong quá trình thực hiện test để bao quát được tất cả các trường hợp xảy ra.

![forgot-password]({{ site.baseurl }}/assets/images/manual-testing/forgot-password/forgot-password-form.png)

Để đảm bảo người dùng có thể lấy lại mật khẩu, các bạn tester luôn cần phải thực hiện các trường hợp kiểm thử cho chức năng này!


### Testcases For Forgot Passwod

* Kiểm tra xem có button hoặc hyperlink quên mật khẩu trên màn hình đăng nhập hay không.
* Kiểm tra khi nhấp vào button hoặc hyperlink quên mật khẩu, người dùng sẽ được chuyển hướng đến trang quên mật khẩu.
* Kiểm tra xem trường email có xuất hiện trên trang quên mật khẩu để khôi phục mật khẩu không.
* Kiểm tra xem trang quên mật khẩu có các trường hợp lệ theo yêu cầu hay không (hộp văn bản email, nút gửi, v.v.).
* Kiểm tra chức năng quên mật khẩu khi người dùng nhập sai email và nhấp vào nút gửi.
* Kiểm tra chức năng quên mật khẩu khi người dùng nhập email hợp lệ và nhấp vào nút gửi thì có nhận được hay không.
* Kiểm tra thông báo cảnh báo khi người dùng nhập email chưa đăng ký và nhấp vào lưu.
* Kiểm tra xem thông báo Xác nhận có hiển thị hay không khi người dùng nhập  email đã đăng ký hợp lệ và nhấp vào nút gửi.
* Kiểm tra xem button hoặc hyperlink khôi phục có được gửi cùng với thư mà người dùng đã cung cấp hay không.
* Kiểm tra button hoặc hyperlink mật khẩu đã gửi sẽ bị vô hiệu hóa khi nhấp nhiều lần vào button hoặc hyperlink hoặc theo thông số kỹ thuật và yêu cầu.
* Kiểm tra button hoặc hyperlink được gửi tới người dùng sẽ hết hạn sau một thời gian nhất định.
* Kiểm tra xem button hoặc hyperlink có thể được sử dụng một lần hoặc bao nhiêu lần.
* Kiểm tra xem sau khi nhấp vào button hoặc hyperlink quên mật khẩu nhận được, nó có mở trong một cửa sổ mới hay không.
* Kiểm tra xem trang mật khẩu mới có các trường hợp lệ theo yêu cầu hay không (hộp văn bản mật khẩu mới, xác nhận mật khẩu mới và nút lưu/gửi, v.v.).
* Kiểm tra xem nó có yêu cầu nhập mật khẩu mới không và nhập lại mật khẩu mới.
* Kiểm tra xem người dùng có nhập mật khẩu mới hay không và nhập lại/xác nhận cả hai mật khẩu có khớp nhau cho đến khi mật khẩu mới không được đặt.
* Kiểm tra xem thông báo lỗi có hiển thị khi cả hai mật khẩu không khớp không.
* Kiểm tra thông báo thành công có hiển thị hay không khi người dùng lưu mật khẩu thành công.
* Kiểm tra xem sau khi đặt mật khẩu, tài khoản có yêu cầu người dùng chuyển sang tài khoản của mình hay thoát ra.
* Kiểm tra sau khi người dùng cập nhật mật khẩu, người dùng nên đăng xuất khỏi tất cả các trình duyệt và thiết bị. (Theo yêu cầu)
* Kiểm tra xem người dùng đăng nhập bằng mật khẩu mới có hoạt động không.

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>